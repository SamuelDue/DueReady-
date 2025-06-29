#!/bin/bash

# Image Optimization Script for Deal Readiness Collective
# This script compresses large images to improve site performance

echo "🖼️  Optimizing images for better performance..."

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Function to compress PNG files
compress_png() {
    local input_file="$1"
    local output_file="$2"
    local filename=$(basename "$input_file")
    
    echo "Compressing $filename..."
    
    # Try different compression tools
    if command -v pngquant >/dev/null 2>&1; then
        pngquant --quality=65-80 --output "$output_file" "$input_file"
    elif command -v convert >/dev/null 2>&1; then
        convert "$input_file" -quality 75 -resize 1920x1080\> "$output_file"
    elif command -v sips >/dev/null 2>&1; then
        # macOS built-in tool
        sips -Z 1920 -s formatOptions 75 "$input_file" --out "$output_file"
    else
        echo "⚠️  No image compression tools found. Please install one of: pngquant, ImageMagick, or use macOS sips"
        return 1
    fi
    
    # Show file size comparison
    if [ -f "$output_file" ]; then
        original_size=$(wc -c < "$input_file")
        compressed_size=$(wc -c < "$output_file")
        reduction=$((100 - (compressed_size * 100 / original_size)))
        
        echo "✅ $filename: $(numfmt --to=iec $original_size) → $(numfmt --to=iec $compressed_size) (${reduction}% reduction)"
    fi
}

# Compress all large PNG files
for file in public/Gemini_Generated_Image_*.png public/"new image.png"; do
    if [ -f "$file" ]; then
        # Create compressed filename
        basename=$(basename "$file" .png)
        output_file="public/optimized/${basename}-compressed.webp"
        
        # Compress to WebP for even better performance
        if command -v cwebp >/dev/null 2>&1; then
            cwebp -q 75 -resize 1920 1080 "$file" -o "$output_file"
        else
            # Fallback to PNG compression
            output_file="public/optimized/${basename}-compressed.png"
            compress_png "$file" "$output_file"
        fi
    fi
done

echo ""
echo "📊 Image Optimization Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Replace large images in your components with optimized versions from public/optimized/"
echo "2. Use Next.js Image component for automatic optimization"
echo "3. Consider converting to WebP format for 25-35% smaller file sizes"
echo ""
echo "🔧 Install additional tools for better compression:"
echo "   brew install pngquant webp imagemagick  # macOS"
echo "   apt install pngquant webp imagemagick   # Ubuntu/Debian"
echo ""

# Show total space saved
if [ -d "public/optimized" ]; then
    original_total=0
    compressed_total=0
    
    for file in public/Gemini_Generated_Image_*.png public/"new image.png"; do
        if [ -f "$file" ]; then
            original_total=$((original_total + $(wc -c < "$file")))
        fi
    done
    
    for file in public/optimized/*; do
        if [ -f "$file" ]; then
            compressed_total=$((compressed_total + $(wc -c < "$file")))
        fi
    done
    
    if [ $original_total -gt 0 ] && [ $compressed_total -gt 0 ]; then
        total_reduction=$((100 - (compressed_total * 100 / original_total)))
        echo "💾 Total space saved: $(numfmt --to=iec $((original_total - compressed_total))) (${total_reduction}% reduction)"
    fi
fi 
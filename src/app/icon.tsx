import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          borderRadius: '50%',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          border: '1px solid #fff',
          letterSpacing: '-1px',
        }}
      >
        DR
      </div>
    ),
    {
      ...size,
    }
  )
} 
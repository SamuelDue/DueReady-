import { type SchemaTypeDefinition } from 'sanity'
import { page } from './page'
import { resource } from './resource'
import { settings } from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, resource, settings],
}

import { type SchemaTypeDefinition } from 'sanity'
import training from './training'
import trainingSettings from './trainingSettings'
import service from './service'
import post from './post'
import customImage from './customImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [training, trainingSettings, service, post, customImage],
}

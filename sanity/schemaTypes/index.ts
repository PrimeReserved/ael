import { type SchemaTypeDefinition } from 'sanity'
import training from './training'
import trainingSettings from './trainingSettings'
import service from './service'
import post from './post'
import customImage from './customImage'
import trainingCategory from './trainingCategory'
import courseCategory from './courseCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [training, trainingSettings, service, post, customImage, trainingCategory, courseCategory],
}

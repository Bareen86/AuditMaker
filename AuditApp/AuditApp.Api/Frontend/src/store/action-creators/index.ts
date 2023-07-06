import * as TodoActionCreators from './todo';
import * as TemplateActionCreators from './template'

export default {
  ...TodoActionCreators,
  ...TemplateActionCreators
}
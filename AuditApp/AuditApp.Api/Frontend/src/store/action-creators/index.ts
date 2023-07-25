import * as TodoActionCreators from './todo';
import * as TemplateActionCreators from './hotel-template'

export default {
  ...TodoActionCreators,
  ...TemplateActionCreators,
}
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ActivityModel extends Model {
  @attr location;
  @attr startTime;

  @hasMany('dog', { inverse: 'activities' }) dogs;            // M-M
  @hasMany('owner', { inverse: 'activities' }) participants;  // M-M
  @belongsTo('owner', { inverse: 'myActivities' }) organiser;  // 1-M


}

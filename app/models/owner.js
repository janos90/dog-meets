import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class OwnerModel extends Model {
  @attr image;
  @attr phone;
  @attr bio;

  @belongsTo('user', { inverse: 'owner' }) user;  // 1-1
  @hasMany('dog', { inverse: 'owner' }) dogs;  // M-1
  @hasMany('activity', { inverse: 'participants' }) activities;  // M-M
  @hasMany('activity', { inverse: 'organiser' }) myActivities;  // M-1

}

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
   @attr name;
   @attr breed;
   @attr height;
   @attr weight;
   @attr birthday;
   @attr anniversary;
   @attr image;


  @belongsTo('owner', { inverse: 'dogs' }) owner;       // 1-M
  @hasMany('activity', { inverse: 'dogs' }) activities; //M-M

}

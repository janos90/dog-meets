import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr first_name;
  @attr last_name;
  @attr username;
  @attr password;
  @attr email;


  // @belongsTo('owner', { inverse: 'user' }) owner;  // 1-1


}

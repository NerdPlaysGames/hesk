class User {
  constructor(userObj) {
    this.id = userObj.id;
    this.user = userObj.user;
    this.isadmin = userObj.isadmin;
    this.name = userObj.name;
    this.email = userObj.email;
    this.signature = userObj.signature;
    this.language = userObj.language;
    this.categories = userObj.categories;
    this.afterreply = userObj.afterreply;
    this.autostart = userObj.autostart;
    this.autoreload = userObj.autoreload;
    this.notify_customer_new = userObj.notify_customer_new;
    this.notify_customer_reply = userObj.notify_customer_reply;
    this.show_suggested = userObj.show_suggested;
    this.notify_new_unassigned = userObj.notify_new_unassigned;
    this.notify_new_my = userObj.notify_new_my;
    this.notify_reply_unassigned = userObj.notify_reply_unassigned;
    this.notify_reply_my = userObj.notify_reply_my;
    this.notify_assigned = userObj.notify_assigned;
    this.notify_pm = userObj.notify_pm;
    this.notify_note = userObj.notify_note;
    this.default_list = userObj.default_list;
    this.autoassign = userObj.autoassign;
    this.ratingneg = userObj.ratingneg;
    this.ratingpos = userObj.ratingpos;
    this.rating = userObj.rating;
    this.replies = userObj.replies;
  }
}

module.exports = User;

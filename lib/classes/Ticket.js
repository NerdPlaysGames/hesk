class Ticket {
  constructor(ticketObj) {
    this.id = ticketObj.id;
    this.trackid = ticketObj.trackid;
    this.name = ticketObj.name;
    this.email = ticketObj.email;
    this.category = ticketObj.category;
    this.priority = ticketObj.priority;
    this.subject = ticketObj.subject;
    this.message = ticketObj.message;
    this.dt = ticketObj.dt;
    this.lastchange = ticketObj.lastchange;
    this.firstreply = ticketObj.firstreply;
    this.closedat = ticketObj.closedat;
    this.articles = ticketObj.articles;
    this.ip = ticketObj.ip;
    this.language = ticketObj.language;
    this.status = ticketObj.status;
    this.openedby = ticketObj.openedby;
    this.firstreplyby = ticketObj.firstreplyby;
    this.closedby = ticketObj.closedby;
    this.replies = ticketObj.replies;
    this.staffreplies = ticketObj.staffreplies;
    this.owner = ticketObj.owner;
    this.assignedby = ticketObj.assignedby;
    this.time_worked = ticketObj.time_worked;
    this.lastreplier = ticketObj.lastreplier;
    this.replierid = ticketObj.replierid;
    this.archive = ticketObj.archive;
    this.locked = ticketObj.locked;
    this.attachments = ticketObj.attachments;
    this.merged = ticketObj.merged;
    this.history = ticketObj.history;
    this.customFields = {
      1: ticketObj.custom1,
      10: ticketObj.custom10,
      11: ticketObj.custom11,
      12: ticketObj.custom12,
      13: ticketObj.custom13,
      14: ticketObj.custom14,
      15: ticketObj.custom15,
      16: ticketObj.custom16,
      17: ticketObj.custom17,
      18: ticketObj.custom18,
      19: ticketObj.custom19,
      2: ticketObj.custom2,
      20: ticketObj.custom20,
      21: ticketObj.custom21,
      22: ticketObj.custom22,
      23: ticketObj.custom23,
      24: ticketObj.custom24,
      25: ticketObj.custom25,
      26: ticketObj.custom26,
      27: ticketObj.custom27,
      28: ticketObj.custom28,
      29: ticketObj.custom29,
      3: ticketObj.custom3,
      30: ticketObj.custom30,
      31: ticketObj.custom31,
      32: ticketObj.custom32,
      33: ticketObj.custom33,
      34: ticketObj.custom34,
      35: ticketObj.custom35,
      36: ticketObj.custom36,
      37: ticketObj.custom37,
      38: ticketObj.custom38,
      39: ticketObj.custom39,
      4: ticketObj.custom4,
      40: ticketObj.custom40,
      41: ticketObj.custom41,
      42: ticketObj.custom42,
      43: ticketObj.custom43,
      44: ticketObj.custom44,
      45: ticketObj.custom45,
      46: ticketObj.custom46,
      47: ticketObj.custom47,
      48: ticketObj.custom48,
      49: ticketObj.custom49,
      5: ticketObj.custom5,
      50: ticketObj.custom50,
      6: ticketObj.custom6,
      7: ticketObj.custom7,
      8: ticketObj.custom8,
      9: ticketObj.custom9,
    };
    this.data = ticketObj;
  }
}

module.exports = Ticket;

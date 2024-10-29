var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule                December 2 December 6            12\/2  12\/3  12\/4  12\/5  12\/6           First Day of Classes             December 9 December 13            12\/9  12\/10  12\/11  12\/12  12\/13                         December 16 December 20            12\/16  12\/17  12\/18  12\/19  12\/20                        January 6 January 10            1\/6  1\/7  1\/8  1\/9  1\/10                       January 13 October 17            1\/13  1\/14  1\/15  1\/16  1\/17                       January 20 January 24            1\/20  1\/21  1\/22  1\/23  1\/24     Martin Luther King Jr. Day  No Classes                   January 27 January 31            1\/27  1\/28  1\/29  1\/30  1\/31                       February 3 February 7            2\/3  2\/4  2\/5  2\/6  2\/7                  Last day to drop courses or resign with W grades        February 10 February 14            2\/10  2\/11  2\/12  2\/13  2\/14                       February 17 February 21            2\/17  2\/18  2\/19  2\/20  2\/21                       February 24 February 28            2\/24  2\/25  2\/26  2\/27  2\/28               Last Day of Classes             The instructor reserves the right to modify the schedule as needed.    "
},
{
  "id": "schedule-13-1",
  "level": "2",
  "url": "schedule.html#schedule-13-1",
  "type": "Warning",
  "number": "1.1",
  "title": "",
  "body": " The instructor reserves the right to modify the schedule as needed.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

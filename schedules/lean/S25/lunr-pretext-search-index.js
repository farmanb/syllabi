var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule                  March 12 March 14     March 12  Introduction and Setup    March 14  Terms and Types  Theorem Proving in Lean, Ch. 2   Hitchhiker's Guide to Logical Verification, 1.1, 1.2                                         March 17 March 21     March 17  Definitions, Variables, Sections, Namespaces  Theorem Proving in Lean, Ch. 2       March 19  Logic, Structured Proofs  Theorem Proving in Lean, Ch. 3   Hitchhiker's Guide to Logical Verification, 4.1, 4.2      March 21  Classical Logic  Theorem Proving in Lean, Ch. 3   Hitchhiker's Guide to Logical Verification, 4.1, 4.2                                       March 24 March 28     March 24  Universal Quantifiers  Theorem Proving in Lean, Ch. 4    Hitchhiker's Guide to Logical Verification, 4.3       March 26  Existential Quantifiers  Theorem Proving in Lean, Ch. 4    Hitchhiker's Guide to Logical Verification, 4.3       March 28  Tactics  Theorem Proving in Lean, Ch. 5    Hitchhiker's Guide to Logical Verification, 3.1 3.8                                                          March 31 April 4     March 31  Basic Inductive Types  Theorem Proving in Lean, Ch. 7    Hitchhiker's Guide to Logical Verification, 5.1  5.4       April 2  Constructing the Natural Numbers  Theorem Proving in Lean, Ch. 7     Mathematics in Lean, 5.2        April 4  Lists    Theorem Proving in Lean, Ch. 7     Hitchhiker's Guide to Logical Verification, 5.1  5.4                                         April 7 April 11     April 7     Structures   Theorem Proving in Lean, Ch. 9    Hitchhiker's Guide to Logical Verification, 5.5       Type Classes    Theorem Proving in Lean, Ch. 10     Hitchhiker's Guide to Logical Verification, 5.6          April 9  Sets   Mathematics in Lean, 4.1       April 11  Sets   Mathematics in Lean, 4.1                                                                         April 14 April 18     April 14  Set Functions    Mathematics in Lean, 4.2        April 16  Set Functions    Mathematics in Lean, 4.2        April 18  No Classes (University Closed for Easter)       April 21 April 25     April 21  No Classes (University Closed for Easter)    April 23   Algebraic Structures     April 23  Algebraic Structures in Lean I (Operations and Monoids)    Mathematics in Lean, 6.2                                          April 28 May 2     April 28  Class Cancelled (Jury Duty)    April 31  Algebraic Structures in Lean II (Groups)    Mathematics in Lean, 6.2        May 2  Final Project proposals       May 5 May 9     May 5  Algebraic Structures in Lean II (Rings and Fields)    Mathematics in Lean, 6.2        May 7  Morphisms    Mathematics in Lean, 7.2        May 9  Subobjects    Mathematics in Lean, 7.3           May 12 May 16     12 Logical Foundations of Mathematics   12.1 Universes    12.2 The Peculiarities of Prop    12.3 The Axiom of Choice                                            May 19 May 23     12 Logical Foundations of Mathematics            12.4 Subtypes    12.5 Quotient Types                                           The instructor reserves the right to modify the schedule as needed.    "
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

var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule                  March 12 March 14     March 12  Introduction and Setup    March 14  Terms and Types  Theorem Proving in Lean, Ch. 2   Hitchhiker's Guide to Logical Verification, 1.1, 1.2                                         March 17 March 21     March 17  Definitions, Variables, Sections, Namespaces  Theorem Proving in Lean, Ch. 2       March 19  Logic, Structured Proofs  Theorem Proving in Lean, Ch. 3   Hitchhiker's Guide to Logical Verification, 4.1, 4.2      March 21                                      March 24 March 28     2 Programs and Theorems   2.1 Type Definitions    2.2 Function Definitions    2.3 Theorem Statements                                          March 31 April 4     3 Backward Proofs    3.1 Tactic Mode    3.2 Basic Tactics    3.3 Reasoning about Connectives and Quantifiers                                                       April 7 April 11     3 Backward Proofs             3.4 Reasoning about Equality    3.5 Rewriting Tactics    3.6 Proofs by Mathematical Induction    3.7 Induction Tactic                                                                           April 14 April 18     4 Forward Proofs   4.1 Structured Proofs    4.2 Structured Constructs    4.3 Forward Reasoning about Connectives and Quantifiers    4.4 Calculational Proofs                                                                                                                             April 21 April 25     5 Functional Programming               5.5 Structures                                                        April 28 May 2     5 Functional Programming                  5.6 Type Classes                                                  May 5 May 9     7 Effectful Programming   7.1 Introductory Example    7.2 Two Operations and Three Laws    7.3 A Type Class                                                         May 12 May 16     12 Logical Foundations of Mathematics   12.1 Universes    12.2 The Peculiarities of Prop    12.3 The Axiom of Choice                                            May 19 May 23     12 Logical Foundations of Mathematics            12.4 Subtypes    12.5 Quotient Types                                           The instructor reserves the right to modify the schedule as needed.    "
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

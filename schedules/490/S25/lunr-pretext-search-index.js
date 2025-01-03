var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule                  March 12 March 14   Hitchhiker's Guide to Logical Verification    1 Types and Terms   1.1 Types    1.2 Terms    1.3 Type Checking and Type Inference    1.4 Type Inhabitation                                        March 17 March 21   Hitchhiker's Guide to Logical Verification    2 Programs and Theorems   2.1 Type Definitions    2.2 Function Definitions    2.3 Theorem Statements                                        March 24 March 28   Hitchhiker's Guide to Logical Verification    3 Backward Proofs    3.1 Tactic Mode    3.2 Basic Tactics    3.3 Reasoning about Connectives and Quantifiers    3.4 Reasoning about Equality    3.5 Rewriting Tactics    3.6 Proofs by Mathematical Induction    3.7 Induction Tactic    3.8 Cleanup Tactics                                         March 31 April 4   Hitchhiker's Guide to Logical Verification    4 Forward Proofs   4.1 Structured Proofs    4.2 Structured Constructs    4.3 Forward Reasoning about Connectives and Quantifiers    4.4 Calculational Proofs    4.5 Forward Reasoning with Tactics                                                  April 7 April 11   Mathematics in Lean    2 Basics   2.1 Calculating    2.2. Proving Identities in Algebraic Structures    2.3. Using Theorems and Lemmas    2.4. More examples using apply and rw    2.5. Proving Facts about Algebraic Structures                                                                         April 14 April 18   Mathematics in Lean    3 Logic   3.1 Implication and the Universal Quantifier    3.2 The Existential Quantifier    3.3 Negation    3.4 Conjunction and Iff    3.5 Disjunction    3.6 Sequences and Convergence                                                                                                                 April 21 April 25   Mathematics in Lean    4. Sets and Functions   4.1. Sets    4.2. Functions    4.3. The Schröder Bernstein Theorem                                         April 28 May 2   Mathematics in Lean    5. Elementary Number Theory   5.1. Irrational Roots    5.2. Induction and Recursion    5.3. Infinitely Many Primes                                      May 5 May 9  Capstone Project                                 May 12 May 16  Capstone Project                                May 19 May 23  Capstone Project Presentations                                     The instructor reserves the right to modify the schedule as needed.    "
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

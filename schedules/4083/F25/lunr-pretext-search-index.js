var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule             September 4 September 5     September 5   Binary Operations    Associativity,  Identity,  Inverses,  Commutativity.         September 8 September 12     September 8   Groups    Axioms,  Elementary Properties      September 10   Morphisms of Groups     September 12    Abelian Examples   Integers Modulo  Roots of Unity     4 Nonabelian Examples  Symmetric Groups  Dihedral Groups         September 15 September 19     September 15   5 Subgroups  Definition  Subgroup Criterion  Cyclic and Subgroups      September 17   6 Cyclic Groups  Division Algorithm  Greatest Common Divisors  Classification      September 19   8 Groups of Permutations  Properties of Homomorphisms   Subgroups Associated to Homomorphisms:  Images,  Inverse Images,  Kernels     Cayley's Theorem         September 22 September 26     September 22   9 Finitely Generated Abelian Groups  Products and Coproducts  Fundamental Theorem of Finitely Generated Abelian Groups      September 24   10 Cosets and the Theorem of Lagrange  Left\/Right Equivalence Modulo a Subgroup  Left and Right Cosets  Lagrange's Theorem  Index of a Subgroup  Left\/Right Cosets and Kernels      September 26   12 Factor Groups  Normal Subgroups  Quotients  Universal Mapping Property for Quotients  First Isomorphism Theorem for Groups  Inner Automorphisms         September 29 October 3     September 29   13 Factor-Group Computations and Simple Groups  Examples  Centers  Commutators  Simple Groups      October 1  Review    October 3   Exam 1        October 6 October 10     October 6   22 Rings and Fields  Rng Axioms  Ring Axioms  Examples      October 8   22 Rings and Fields  Homomorphisms  Fields      October 10   23 Integral Domains  Definition  Zero Divisors  Cancellation  Characteristic         October 13 October 17     October 13   27 Rings of Polynomials  Definitions  Basic Properties      October 15   27 Rings of Polynomials  Roots of Polynomials  Evaluation Homomorphism for Fields      October 17   28 Factorization of Polynomials over a Field  Division Algorithm  Factoring  Irreducibility         October 20 October 24     October 20   28 Factorization of Polynomials over a Field  Eisenstein's Criterion  Uniqueness of Factorization      October 22  Review    October 24  Exam 2       October 27 October 31     October 27   30 Homomorphisms and Factor Rings  Ideals  Quotient Rings  Universal Mapping Property for Quotients (Reprise)  First Isomorphism Theorem for Rings      October 29   31 Prime and Maximal Ideals  Prime Ideals  Maximal Ideals      October 31   31 Prime and Maximal Ideals  Applications to Polynomials Rings over a Field  Applications to Factoring         November 3 November 7     November 3   34 Unique Factorization Domains  Unique Factorization Domains  Principal Ideal Domains      November 5   34 Unique Factorization Domains  Fundamental Theorem of Arithmetic  Gauss' Lemma      November 7   37 Algebraic Geometry  Algebraic Varieties  Examples         November 10 November 13     November 10  Review    November 12   Final Exam               The instructor reserves the right to modify the schedule as needed.    "
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

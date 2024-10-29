var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "1",
  "title": "Schedule",
  "body": " Schedule                December 2 December 6            12\/2  12\/3  12\/4  12\/5  12\/6            1.1 The Geometry and Algebra of Vectors  1.2 Length and Angle: The Dot Product       1.2 Length and Angle: The Dot Product  1.3 Lines and Planes       December 9 December 13            12\/9  12\/10  12\/11  12\/12  12\/13     2.1 Introduction to Systems of Linear Equations  2.2 Direct Methods for Solving Linear Systems        2.2 Direct Methods for Solving Linear Systems  Computations with Sage        2.3 Spanning Sets and Linear Independence       December 16 December 20            12\/16  12\/17  12\/18  12\/19  12\/20     2.3 Spanning sets and Linear Independence       Review        Exam 1       January 6 January 10            1\/6  1\/7  1\/8  1\/9  1\/10     3.1 Matrix Operations       3.2 Matrix Algebra       3.3 The Inverse of a Matrix       January 13 October 17            1\/13  1\/14  1\/15  1\/16  1\/17     3.4 The LU Factorization       3.5 Subspaces, Basis, Dimension, and Rank       3.6 Introduction to Linear Transformations       January 20 January 24            1\/20  1\/21  1\/22  1\/23  1\/24     Martin Luther King Jr. Day  No Classes       Review       Exam 2       January 27 January 31            1\/27  1\/28  1\/29  1\/30  1\/31     4.1 Introduction to Eigenvalues and Eigenvectors       4.2 Determinants       4.3 Eigenvalues and Eigenvectors of Matrices       February 3 February 7            2\/3  2\/4  2\/5  2\/6  2\/7     4.4 Similarity and Diagonalization       Review        Last day to drop courses or resign with W grades    Exam 3        February 10 February 14            2\/10  2\/11  2\/12  2\/13  2\/14     5.1 Orthogonality in       5.2 Orthogonal Complements and Orthogonal Projections       5.3 The Gram-Schmidt Process and the Factorization       February 17 February 21            2\/17  2\/18  2\/19  2\/20  2\/21     5.4 Orthogonal Diagonalization of Symmetric Matrices       6.1 Vector Spaces and Subspaces       6.2 Linear Independence, Basis, and Dimension       February 24 February 28            2\/24  2\/25  2\/26  2\/27  2\/28     Review       Final Exam     Last Day of Classes             The instructor reserves the right to modify the schedule as needed.    "
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

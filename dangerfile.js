import { danger, warn } from 'danger'

if (danger.github.pr.body.length < 5) {
  warn(
    `La description d'une pull request permet de comprendre le contexte du \
     code produit et facilite la revue de code. Prenez le temps de la \
     détailler davantage`
  )
}
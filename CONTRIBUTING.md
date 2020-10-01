# CONTRIBUTION

Le code source du site est versionné à l'aide de [Git](https://git-scm.com/).  
Il existe deux façon de le mettre à jour :
- si l'outil Git est maitrisé, en suivant le processus habituel de clone/commit/push
- sinon, en éditant directement les fichiers depuis l'interface proposée sur github

La seconde façon s'opère en naviguant dans l'arborescence proposée sur le [projet github](https://github.com/parisnumerique/design-system) et sur une page correspondante à un fichier, il y a la possibilité d'éditer et enregistrer les changements apportés.

Le projet est configuré pour qu'à chaque modification enregistrée, le site est automatiquement déployé et les changements se retrouvent en ligne au bout de quelques minutes.

### Rédaction du contenu

Le contenu se rédige en [markdown](https://kramdown.gettalong.org/quickref.html) ou avec du code html directement. Il y a aussi la possibilité d'utiliser des composants de mise en page, proposés dans une bibliothèque de composants.

```
# Hamoniser les interfaces de la Ville de Paris

Adapter les services et la communication avec la marque, diffuser l'expertise et apprendre de l'expérience de toutes les équipes, faciliter la collaboration et éviter de recréer ce qui esxiste.

{% rendercontent "content/layouts/container" %}
  {% rendercontent "content/layouts/column" %}
    Le Design System de la Ville de Paris est maintenu pas des agents issus de directions différentes.
  {% endrendercontent %}
  {% rendercontent "content/layouts/column" %}
    Il est participatif&nbsp;: vous pouvez proposer des idées, améliorations et suggestions.
  {% endrendercontent %}
{% endrendercontent %}
```

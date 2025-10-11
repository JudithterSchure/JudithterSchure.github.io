---
layout: post
title: "[Scientists] Avoidable research waste caused by data transfer agreements"
date: 2023-07-04
description: "Early summer of 2020, eight trials agreed to collaborate in a prospective meta-analysis and keep a live account of the pooled results. Each was interested in the question whether the BCG vaccine, originally develop..."
tags: []
categories: ["Scientists"]
thumbnail: /assets/img/posts/Scientists__Avoidable_research_waste_caused_by_data_transfer_agreements-thumbnail.jpg
---
![](/assets/img/posts/Scientists__Avoidable_research_waste_caused_by_data_transfer_agreements-0.jpg)

Early summer of 2020, eight trials agreed to collaborate in a prospective meta-analysis and keep a live account of the pooled results. Each was interested in the question whether the BCG vaccine, originally developed to protect against tuberculosis, had a nonspecific immune effect against the SarS-Cov-2 virus. Could such an effect be observed in a reduction of the risk of COVID-19 infection or hospitalization? One by one, they started trials in healthcare workers to investigate this hypothesis: the Netherlands (NL in the plot), South Africa (SA in the plot), the United States, Denmark, Hungary, France, Brazil and Guinea-Bissau/Mozambique (AF, in the plot)).

In December 2022 we made the first results of our live analysis available on MedRxiv (see [here](https://www.medrxiv.org/content/10.1101/2022.12.15.22283474v1.full.pdf+html)). The figure above simplifies the results for infections as they developed over time – it includes the three trials contributing most data. (All trials together convey the same message in Figure 7 of the preprint but clutter the plot; not simplifying interpretation.)

## Getting started
The first trial was ready for data upload in June 2020. We were very excited about monitoring the results in a dashboard. I blogged about that [here](/blog/2020/Personal__COVID-19_trial_dashboard/). We designed this meta-analysis such that it could detect a beneficial effect of the BCG vaccine as soon as possible and inform other trials that were still in preparation.

We did not really design it to detect futility as soon as possible. What if we had?


## The data
The plot above shows at the bottom that the first two trials already observed many events of COVID-19 infection in the early Spring of 2020 (NL), summer of 2020 (SA) and the Fall of 2020 (NL). We can even recognize the lockdown in the Spring of 2020 in the Netherlands, which introduced a gap in the observed infections, with the next pandemic wave starting right at the end of the summer.

These events of infection are observed in healthcare workers that were randomly assigned to either the BCG vaccine or a control vaccine, to investigate their risk of COVID-19 infection (and hospitalization). When more of these events of infection are observed in the group of healthcare workers that received the control vaccine, we estimate that the group that received the BCG vaccine is protected by the vaccine – with a hazard ratio smaller than 1 (risk in the vaccine group being smaller) and a Vaccine Efficacy (VE) that is larger than 0%. When more of these events of infection are observed in the group that received BCG, it is the other way around, and we estimate that the BCG vaccine does not protect and can even increase the risk of infection – with a hazard ratio larger than 1.

## Reaching conclusions in January 2021...?
If we had decided to monitor for futiliy, a good candidate threshold would have been the 30% minimum Vaccine Efficacy (VE) set by the FDA in June 2020 in their [published guidance](https://www.fda.gov/media/139638/download) for COVID-19 vaccines trials.


The plot above shows that the final months of 2020 we could have seen it coming that the BCG trials were futile according to this 30% threshold. The typical effect of the BCG vaccine was less impressive than 30%. By January 2021, also all values in its 95%-confidence interval were less impressive than 30%.

Studying this specific question further could be considered research waste. If we had seen this conclusion coming in the Fall of 2020, the planned trial in Guinea-Bissau/Mozambique (AF, in the plot) might have been able to change course.


## ....but not having the data
Except that we could not have seen that coming in 2020. Even for the first trials that were ready for data upload in June of 2020, it took until July 2021 before there was a legal agreement for data sharing – a data transfer agreement (DTA). There are trials for which this took until January 2023 that are not even in the MedRxiv publication yet.

Hence, DTAs are causing avoidable research waste. In my future research, I hope to contribute to statistical methods that can spur collaboration in prospective meta-analysis – without DTAs.
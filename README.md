# fixed-number-abbreviation

Abbreviate a number and add unit letters with controlling the general sign quantity

## Installation

`npm install fixed-number-abbreviation`

## How to use
Import function as following
`import { numberAbbreviate } from 'fixed-number-abbreviation';`

Use function wherever you need with 2 or 3 params.

`numberAbbreviate(number, signs, truncZero);`
- `number: number` - the number, which abbreviation it is needed to obtain
- `signs: number` - quantity of signs that you want to remain after the abbreviation. Specificity of this helper is that this number will include the alphabet sign if it will be displayed. Point sign is not calculated in this number.
- `truncZero: boolean`(optional) - if this option is `true` and after abbreviation some zero sign's remain at the end of the numerous part, they will be removed, if `false` they will remain

## Aim of this helper creation
This helper was created due to the request from UI expectations, as there where very small place to display some number, that was expected to become very large. Other abbreviation helpers do not include in the calculation sign letter that can represent order.

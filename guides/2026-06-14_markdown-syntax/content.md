# Basic Syntax | Markdown Guide

> Source: [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)

## Overview

Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.

## Headings

To create a heading, add number signs (`#`) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

# Heading level 1

`# Heading level 1`

## Heading level 2

`## Heading level 2`

### Heading level 3

`### Heading level 3`

#### Heading level 4

`#### Heading level 4`

##### Heading level 5

`##### Heading level 5`

###### Heading level 6

`###### Heading level 6`

### Alternate Syntax

Alternatively, on the line below the text, add any number of `==` characters for heading level 1 or `--` characters for heading level 2.

`Heading level 1 ===============`

`Heading level 2 ---------------`

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

```
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

<p>I really like using Markdown.</p>

<p>I think I'll use it to format all of my documents from now on.</p>

## Line Breaks

To create a line break or new line (`<br>`), just add a line without blank lines.

```
This is the first line.
And this is the second line.
```

This is the first line.   
And this is the second line.

## Emphasis

You can add emphasis by making text bold or italic.

### Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

`I just love **bold text**.` or `I just love __bold text__.`

I just love **bold text**.

### Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

`Italicized text is the *cat's meow*.` or `Italicized text is the _cat's meow_.`

Italicized text is the _cat’s meow_.

### Bold and Italic

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

`This text is ***really important***.`  or `This text is ___really important___.` or `This text is __*really important*__.` or `This text is **_really important_**.`

This text is _**really important**_.

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

### Blockquotes with Multiple Paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
> 
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with Other Elements

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

The rendered output looks like this:

> #### The quarterly results look great!
> 
> *   Revenue was off the chart.
> *   Profits were higher than ever.
> 
> _Everything_ is going according to **plan**.

## Lists

You can organize items into ordered and unordered lists.

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

```
1. First item 
2. Second item 
3. Third item 
4. Fourth item
```

1.  First item
2.  Second item
3.  Third item
4.  Fourth item


```
1. First item 
1. Second item 
1. Third item 
1. Fourth item
```

1.  First item
1.  Second item
1.  Third item
1.  Fourth item

### Unordered Lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.

```md
- First item 
- Second item 
- Third item 
- Fourth item
```

- First item
- Second item
- Third item
- Fourth item

#### Starting Unordered List Items With Numbers

If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to [escape](#escaping-characters) the period.

```
- 1968\. A great year! 
- I think 1969 was second best.
```

*   1968\. A great year!
*   I think 1969 was second best.

## Code

To denote a word or phrase as code, enclose it in backticks (`` ` ``).

``At the command prompt, type `nano`.``

`At the command prompt, type <code>nano</code>.`

At the command prompt, type `nano`.

### Escaping Backticks

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (` `` `).

``` ``Use `code` in your Markdown file.`` ```

``<code>Use `code` in your Markdown file.</code>``

``Use `code` in your Markdown file.``

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

```
    ```html
    <html>
        <head>
        </head>
    </html>
    ```
```

The rendered output looks like this:

```html
<html>
  <head>
  </head>
</html>
```

## Horizontal Rules

To create a horizontal rule, use three or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```
***

---

_________________
```

The rendered output of all three looks identical:

* * *

### Horizontal Rule Best Practices

For compatibility, put blank lines before and after horizontal rules.

`Try to put a blank line before...  ---  ...and after a horizontal rule.  `

`Without blank lines, this would be a heading. --- Don't do this!`

## Links

To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/).

### Adding Titles

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in quotation marks after the URL.

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/ "The best search engine for privacy").

### URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

```
<https://www.markdownguide.org>
<fake@example.com>
```

The rendered output looks like this:

<https://www.markdownguide.org>

<fake@example.com>

### Formatting Links

To [emphasize](#emphasis) links, add asterisks before and after the brackets and parentheses. To denote links as [code](#code), add backticks in the brackets.

```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

The rendered output looks like this:

I love supporting the **[EFF](https://eff.org/)**.  
This is the _[Markdown Guide](https://www.markdownguide.org/)_.  
See the section on [`code`](#code).

### Reference-style Links

Reference-style links are a special kind of link that make URLs easier to display and read in Markdown. Reference-style links are constructed in two parts: the part you keep inline with your text and the part you store somewhere else in the file to keep the text easy to read.

## Images

To add an image, add an exclamation mark (`!`), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

```
![The San Juan Mountains are beautiful](/assets/images/san-juan-mountains.jpg "San Juan Mountains")
```

The rendered output looks like this:

![The San Juan Mountains are beautiful](https://www.markdownguide.org/assets/images/generated/assets/images/san-juan-mountains-1080.jpg)

### Linking Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```
[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
```

The rendered output looks like this:

[![An old rock in the desert](https://www.markdownguide.org/assets/images/generated/assets/images/shiprock-1080.jpg)](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

## Escaping Characters

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (`\`) in front of the character.

```
\* Without the backslash, this would be a bullet in an unordered list.
```

The rendered output looks like this:

\* Without the backslash, this would be a bullet in an unordered list.

### Characters You Can Escape

You can use a backslash to escape the following characters.

\\

backslash

\`

backtick (see also [escaping backticks in code](#escaping-backticks))

\*

asterisk

\_

underscore

{ }

curly braces

\[ \]

brackets

< >

angle brackets

( )

parentheses

#

pound sign

+

plus sign

\-

minus sign (hyphen)

.

dot

!

exclamation mark

|

pipe (see also [escaping pipe in tables](https://www.markdownguide.org/extended-syntax/#escaping-pipe-characters-in-tables))

## HTML

Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the [color of text](https://www.markdownguide.org/hacks/#color) or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

```
This **word** is bold. This <em>word</em> is italic.
```

The rendered output looks like this:

This **word** is bold. This _word_ is italic.

### HTML Best Practices

Use blank lines to separate block-level HTML elements like `<div>`, `<table>`, `<pre>`, and `<p>` from the surrounding content. Try not to indent the tags with tabs or spaces — that can interfere with the formatting.

You can’t use Markdown syntax inside block-level HTML tags. For example, `<p>italic and **bold**</p>` won’t work.
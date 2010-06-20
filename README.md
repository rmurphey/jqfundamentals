# Material de Treinamento Fundamentos jQuery #
Este repositório contém em evolução o material fonte para minhas turmas de Fundamentos jQuery, incluindo exercícios, soluções e um livro web-based.

Se você está procurando pela última versão do livro, baixe a versão [mais recente](http://github.com/rmurphey/jqfundamentals/downloads) e navegue em /book/release/html.

## Contributing ##
Eu liberei este material sob a licença Creative Commons Attribution-Share Alike 3.0 US porque eu estou ansioso para ver outras pessoas contribuir nele. Pull requests são bem vidas e encorajadas!

O conteúdo do livro é escrito em [DocBook 5.0](http://www.docbook.org/), que é ligeiramente doloroso para escrever devido à falta de bons editores gratuitos de XML, mas gera todo tipo de saída, incluindo HTML e PDF. Eu usei a versão free do [XMLEditor](http://www.xmlmind.com/xmleditor/) para gerar os arquivos dos capítulos.

Se você está interessado em contribuir, mas não quer lidar com o DocBook, fale comigo e nós podemos trabalhar em algo diferente. Também, se você tiver conteúdo existente que você ache que pode ser bom incluir no livro, fale comigo também! Você irá, claro, ser creditado por qualquer contribuição.

A seguir, uma lista do que há pra fazer no livro e no projeto.

### TODO ###

#### Capítulos do livro ####
*	Escrever código testável
*	Teste unitário com QUnit
*	Melhores práticas para performance (refer to http://paulirish.com/perf)
* 	Criação de plugins
* 	Ferramentas para build & gerenciamento de dependência [RequireJS](http://requirejs.org/)
*	Eventos customizados

#### Geral ####
*   A saída em PDF é decente, mas contém falhas. Se você está interessado em resolve-las, faça por favor :) Por enquanto eu considero bom o bastante.
*   Pelo fato de eu escrever JavaScript, não shell scripts, os shell scripts para geração de HTML e PDF podem ser sem dúvida melhorados, especialmente por que há algumas duplicações entre eles.

## Usando este material ##
Por causa da licença, você é pode usar este material à vontade; Se você usa-lo para dar aulas, eu adoraria saber sobre.

## Gerando o HTML ##
No diretório /book, execute:

`./scripts/install.sh`

Depois execute:

`./scripts/publish.sh`

`./scripts/publish-pdf.sh`

# Copyright & Licenciamento #
Este material é licenciado por Rebecca Murphey sob [Creative Commons Attribution-Share Alike 3.0 United States license](http://creativecommons.org/licenses/by-sa/3.0/us/). Você é livre para copiar, distribuir, transmitir, modificar este trabalho, desde que você referencie Rebbeca Murphey como autor original e referencie [este repositório](http://github.com/rmurphey/jqfundamentals). Se você alterar, transformar, ou construir sob este trabalho, você deve distribuir o trabalho resultante sob a mesma licença, similiar ou compatível. Qualquer uma das condições acima podem ser dispensadas se você conseguir permissão do detentor da copiright. Para qualquer reuso ou distribuição, você deve deixar claro para outros os termos da licença deste trabalho. A melhor forma de fazer isso é com um link para [Creative Commons Attribution-Share Alike 3.0 United States license](http://creativecommons.org/licenses/by-sa/3.0/us/).
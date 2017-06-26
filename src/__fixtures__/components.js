import DocChomp from 'doc-chomp';

export default [

  DocChomp`
    # Test Document

    [[toc]]

    ## Basic Markdown Template

    This is a basic Markdown template, with no interpolations going on.

    This should be

    - easy and;
    - predictable!

    ## Here's a couple of hyperlinks

    <https://duckduckgo.com> [GitHub](https://github.com)

    ## Here's a code snippet with no interpolations

    \`\`\`bash
    npm install -g yarn
    \`\`\`

    ## Here's a code snippet with things which shouldn't be treated as interpolations

    \`\`\`bash
    function rbenv() {
      RUBY=blah
    }
    \`\`\`

    ## Here's a paragraph with a simple interpolation

    There are {{Object.keys(props).length}} props being supplied to this component.

    ## Here's a code snippet with a simple interpolation

    \`\`\`bash
    function rbenv() {
      RUBY={{props.rubycontent}}
    }
    \`\`\`

    ## Here's an unhinted code snippet

    \`\`\`
    the quick brown fox jumps over the lazy dog
    \`\`\`

    ## Here's an unhinted snippet with no discernible language

    \`\`\`
    )()(())
    \`\`\`

    \`\`\`bash
    brew tap buildkite/buildkite
    brew install --token='{{props.token || 'INSERT-YOUR-AGENT-TOKEN-HERE'}}' buildkite-agent

    function() {
      ENV="foo_bar"
    }
    \`\`\`

    Let's also test interpolation inside other elements. <code>{{ "foo bar" }}</code>
    `,

  DocChomp`
    ---
    imports:
      foo: foo
      Bar: foo
      '{ bugs, name, version }': ../package.json
    title: a custom title
    myArray:
      - foo
      - bar
    anObject:
      foo: bar
    ---
    # Markdown template with imports, static attributes and interpolations

    This file includes some custom static attributes which should be reflected fine on the resultant object

    This is a _Markdown Component_ file. Here you can include JSX-style assignment expressions; this component was generated using version {{ version }} of {{ name }}!

    We're importing foo, which is {{foo}}.

    We're also adding a react component here: {{<Bar {...bugs} style={{ foo: 'bar' }} />}}

    Another cool thing you can do is use JSX **directly** - here’s an SVG element, used inline: {{ <svg style={{ display: 'inline', height: '1em' }} viewBox="0 0 304 290"><path fill="none" stroke="currentColor" strokeWidth="16" d="M2,111 h300 l-242.7,176.3 92.7,-285.3 92.7,285.3 z" /></svg> }}.
    `,

  DocChomp`
    ---
    title: Markdown Component Loader
    ---
    # ![Markdown Component Loader](logo.svg)

    A Webpack loader that turns Markdown into dynamic, stateless React components!

    <a className="github-link">Check it out on GitHub</a>

    **welcome.mdx**
    <pre><code>Hey there **{'{{'} props.who {'}}'}** ✌🏼
    </code></pre>

    **app.jsx**
    <pre><code>import Welcome from './welcome.mdx';

    ReactDOM.render(
      {'<Welcome who="Monkey Magic" />'},
      document.getElementById('app')
    );
    </code></pre>

    **Rendered:**
    <pre><code>{'<div id="app">'}
      {'<p>Hey there <strong>Monkey Magic</strong> ✌️</p>'}
    {'</div>'}
    </code></pre>
    `,

  DocChomp`
    ` // Test that empty input works as expected
];

<template>
  <div>
    <div class="spacer"></div>
    <div class="container">
      <h1>Showcase</h1>
      <p>This page is made to show all the elements and components,<br/>
        and it's only avalabile in dev mode, not in the production build.</p>
      <h1>Typography</h1>

      <p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>
      <a>Anchor</a>
      <div class="spacer"></div>
      <em>Emphasis</em>
      <div class="spacer"></div>
      <small>Small</small>
      <div class="spacer"></div>
      <strong>Strong</strong>
      <div class="spacer"></div>
      <u>Underline</u>
      <h1>Heading</h1>
      <h2>Heading</h2>
      <h3>Heading</h3>
      <h4>Heading</h4>
      <h5>Heading</h5>
      <h6>Heading</h6>

      <h1>Blockquotes</h1>

      <blockquote>
        <p><em>Yeah!! Milligram is amazing.</em></p>
      </blockquote>

      <h1>Buttons</h1><br/><br/>
      <a class="button" href="#">Default Button</a>
      <div class="spacer"></div>
      <button class="button button-outline">Outlined Button</button>
      <div class="spacer"></div>
      <input class="button button-clear" type="submit" value="Clear Button">

      <h1>List</h1>

      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>
      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>
      <dl>
        <dt>Description list item 1</dt>
        <dd>Description list item 1.1</dd>
      </dl>

      <h1>Forms</h1>

      <form>
        <fieldset>
          <label for="nameField">Name</label>
          <input type="text" placeholder="CJ Patoilo" id="nameField">
          <label for="ageRangeField">Age Range</label>
          <select id="ageRangeField">
            <option value="0-13">0-13</option>
            <option value="14-17">14-17</option>
            <option value="18-23">18-23</option>
            <option value="24+">24+</option>
          </select>
          <label for="commentField">Comment</label>
          <textarea placeholder="Hi CJ …" id="commentField"></textarea>
          <div class="float-right">
            <input type="checkbox" id="confirmField">
            <label class="label-inline" for="confirmField">Send a copy to yourself</label>
          </div>
          <input class="button-primary" type="submit" value="Send">
        </fieldset>
      </form>

      <h1>Tables</h1>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Height</th>
          <th>Location</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Stephen Curry</td>
          <td>27</td>
          <td>1,91</td>
          <td>Akron, OH</td>
        </tr>
        <tr>
          <td>Klay Thompson</td>
          <td>25</td>
          <td>2,01</td>
          <td>Los Angeles, CA</td>
        </tr>
        </tbody>
      </table>

      <h1>Grids</h1>

      <div class="example">
        <div class="container">
          <div class="row">
            <div class="column">
              <span class="column-demo">.column</span>
            </div>
            <div class="column">
              <span class="column-demo">.column</span>
            </div>
            <div class="column">
              <span class="column-demo">.column</span>
            </div>
            <div class="column">
              <span class="column-demo">.column</span>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span class="column-demo">.column</span>
            </div>
            <div class="column column-50 column-offset-25">
              <span class="column-demo">.column column-50 column-offset-25</span>
            </div>
          </div>
        </div>
      </div>

      <h1>Code</h1>
      <pre><code>
  {{ preCodeDemo }}
  </code></pre>

      <h1>Extensions</h1>

      <div class="example">
        <div class="row">
          <div class="column">
            <a class="button" href="javascript: void(0)">Default .button</a><a
            class="button button-outline" href="javascript: void(0)">Outlined .button</a>
            <a class="button button-clear" href="javascript: void(0)">Clear .button</a></div>
          <div class="column"><a class="button button-black" href="javascript: void(0)">.button-black</a><a
            class="button button-black button-outline" href="javascript: void(0)">.button-black</a><a
            class="button button-black button-clear" href="javascript: void(0)">.button-black</a></div>
          <div class="column column-20"><a class="button button-small" href="javascript: void(0)">.button-small</a><a
            class="button button-small button-outline" href="javascript: void(0)">.button-small</a><a
            class="button button-small button-clear" href="javascript: void(0)">.button-small</a></div>
          <div class="column"><a class="button button-large" href="javascript: void(0)">.button-large</a><a
            class="button button-large button-outline" href="javascript: void(0)">.button-large</a><a
            class="button button-large button-clear" href="javascript: void(0)">.button-large</a></div>
        </div>
      </div>

      <pre><code>
   {{ preCodeExtensions }}
  </code></pre>

      <h2>Custom components</h2>
      <h4>Card</h4>
      <CreatorCard :data="cardData" :index="cardIndex"/>
    </div>
  </div>
</template>

<script>
import CreatorCard from "@/components/shared/CreatorCard";

export default {
  name: 'Showcase',
  data: () => ({
    preCodeExtensions: `
   .button-black {
      background-color: black;
      border-color: black;
    }\n
    .button-black.button-clear,
    .button-black.button-outline {
      background-color: transparent;
      color: black;
    }\n
    .button-black.button-clear {
      border-color: transparent;
    }\n
    .button-small {
      font-size: .8rem;
      height: 2.8rem;
      line-height: 2.8rem;
      padding: 0 1.5rem;
    }\n
    .button-large {
      font-size: 1.4rem;
      height: 4.5rem;
      line-height: 4.5rem;
      padding: 0 2rem;
    }
  `,
    preCodeDemo: `
    .milligram {
      color: #9b4dca;
    }`,
    cardData: {
      imageUrl: 'https://thumbnails.lbry.com/UCwow4CXdvIfGj126J10LN3w',
      name: 'Mr. Meeseks',
      description: 'I\'m Mr. Meeseks look at meeee!',
      pageUrl: '@mr-meesek'
    },
    cardIndex:1
  }),
  props: {
    msg: String
  },
  components: {
    CreatorCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.example .column-demo {
  background: #d1d1d1;
  border-radius: .4rem;
  display: block;
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  letter-spacing: .1rem;
  line-height: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
}

// Extensions

.button-black {
  background-color: black;
  border-color: black;
}

.button-black.button-clear,
.button-black.button-outline {
  background-color: transparent;
  color: black;
}

.button-black.button-clear {
  border-color: transparent;
}

.button-small {
  font-size: .8rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
}

.button-large {
  font-size: 1.4rem;
  height: 4.5rem;
  line-height: 4.5rem;
  padding: 0 2rem;
}

// Spacer
.spacer {
  display: inline;
  margin-right: 20px;
}

</style>

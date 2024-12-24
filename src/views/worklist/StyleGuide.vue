<template>
  <div class="docs-container">
    <!-- 사이드바 -->
    <aside class="docs-sidebar" v-show="isSNB">
      <h1 class="docs-logo"><i>💠</i>Yongin Market<br />Design System</h1>
      <ul>
        <li v-for="(item, index) in SidebarPubLinks" :key="index">
          <a href="#" @click.prevent="activePubComponent = item.component" :class="{ active: activePubComponent === item.component }">
            <span v-if="item.del"
              ><del>{{ item.name }}</del></span
            >
            <span v-else>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </aside>

    <!-- 메인 콘텐츠 -->
    <main class="docs-main" style="position: relative">
      <button @click="onClickToggle()" style="position: absolute; right: 0; top: 0; padding: 10px; font-size: 1rem">menu</button>
      <div v-show="activePubComponent === 'token'" class="component-section">
        <section class="component-header">
          <h2>Design Tokens</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          <!-- Black and White Colors -->
          <h3>Color System</h3>
          <h4>Black &amp; White</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: #000000">black<br />#000000</div>
            <div class="color-chip" style="background-color: #ffffff; color: #000000; border: 1px solid #edf1f1">white<br />#FFFFFF</div>
          </div>

          <!-- Grayscale Colors -->
          <h4>Grayscale</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-gray-900)">gray-900<br />var(--color-gray-900)</div>
            <div class="color-chip" style="background-color: var(--color-gray-800)">gray-800<br />var(--color-gray-800)</div>
            <div class="color-chip" style="background-color: var(--color-gray-700)">gray-700<br />var(--color-gray-700)</div>
            <div class="color-chip" style="background-color: var(--color-gray-600)">gray-600<br />var(--color-gray-600)</div>
            <div class="color-chip" style="background-color: var(--color-gray-500)">gray-500<br />var(--color-gray-500)</div>
            <div class="color-chip" style="background-color: var(--color-gray-400)">gray-400<br />var(--color-gray-400)</div>
            <div class="color-chip" style="background-color: var(--color-gray-300)">gray-300<br />var(--color-gray-300)</div>
            <div class="color-chip" style="background-color: var(--color-gray-200); color: #555">gray-200<br />var(--color-gray-200)</div>
            <div class="color-chip" style="background-color: var(--color-gray-100); color: #555">gray-100<br />var(--color-gray-100)</div>
            <div class="color-chip" style="background-color: var(--color-gray-50); color: #555">gray-50<br />var(--color-gray-50)</div>
          </div>

          <!-- Blue Colors -->
          <h4>Blue</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-blue-900)">blue-900<br />var(--color-blue-900)</div>
            <div class="color-chip" style="background-color: var(--color-blue-800)">blue-800<br />var(--color-blue-800)</div>
            <div class="color-chip" style="background-color: var(--color-blue-700)">blue-700<br />var(--color-blue-700)</div>
            <div class="color-chip" style="background-color: var(--color-blue-600)">blue-600<br />var(--color-blue-600)</div>
            <div class="color-chip" style="background-color: var(--color-blue-500)">blue-500<br />var(--color-blue-500)</div>
            <div class="color-chip" style="background-color: var(--color-blue-400)">blue-400<br />var(--color-blue-400)</div>
            <div class="color-chip" style="background-color: var(--color-blue-300)">blue-300<br />var(--color-blue-300)</div>
            <div class="color-chip" style="background-color: var(--color-blue-200); color: #555">blue-200<br />var(--color-blue-200)</div>
            <div class="color-chip" style="background-color: var(--color-blue-100); color: #555">blue-100<br />var(--color-blue-100)</div>
            <div class="color-chip" style="background-color: var(--color-blue-50); color: #555">blue-50<br />var(--color-blue-50)</div>
          </div>

          <!-- Green Colors -->
          <h4>Green</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-green-900)">green-900<br />var(--color-green-900)</div>
            <div class="color-chip" style="background-color: var(--color-green-800)">green-800<br />var(--color-green-800)</div>
            <div class="color-chip" style="background-color: var(--color-green-700)">green-700<br />var(--color-green-700)</div>
            <div class="color-chip" style="background-color: var(--color-green-600)">green-600<br />var(--color-green-600)</div>
            <div class="color-chip" style="background-color: var(--color-green-500)">green-500<br />var(--color-green-500)</div>
            <div class="color-chip" style="background-color: var(--color-green-400)">green-400<br />var(--color-green-400)</div>
            <div class="color-chip" style="background-color: var(--color-green-300)">green-300<br />var(--color-green-300)</div>
            <div class="color-chip" style="background-color: var(--color-green-200); color: #555">green-200<br />var(--color-green-200)</div>
            <div class="color-chip" style="background-color: var(--color-green-100); color: #555">green-100<br />var(--color-green-100)</div>
            <div class="color-chip" style="background-color: var(--color-green-50); color: #555">green-50<br />var(--color-green-50)</div>
          </div>

          <!-- Orange Colors -->
          <h4>Orange</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-orange-900)">orange-900<br />var(--color-orange-900)</div>
            <div class="color-chip" style="background-color: var(--color-orange-800)">orange-800<br />var(--color-orange-800)</div>
            <div class="color-chip" style="background-color: var(--color-orange-700)">orange-700<br />var(--color-orange-700)</div>
            <div class="color-chip" style="background-color: var(--color-orange-600)">orange-600<br />var(--color-orange-600)</div>
            <div class="color-chip" style="background-color: var(--color-orange-500)">orange-500<br />var(--color-orange-500)</div>
            <div class="color-chip" style="background-color: var(--color-orange-400)">orange-400<br />var(--color-orange-400)</div>
            <div class="color-chip" style="background-color: var(--color-orange-300)">orange-300<br />var(--color-orange-300)</div>
            <div class="color-chip" style="background-color: var(--color-orange-200)">orange-200<br />var(--color-orange-200)</div>
            <div class="color-chip" style="background-color: var(--color-orange-100); color: #555">orange-100<br />var(--color-orange-100)</div>
            <div class="color-chip" style="background-color: var(--color-orange-50); color: #555">orange-50<br />var(--color-orange-50)</div>
          </div>

          <!-- Background Colors -->
          <h4>Background Colors</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-bg-white); color: #333; border: 1px solid #edf1f1">bg-white<br />var(--color-bg-white)</div>
            <div class="color-chip" style="background-color: var(--color-bg-light-blue); color: #333">bg-light-blue<br />var(--color-bg-light-blue)</div>
            <div class="color-chip" style="background-color: var(--color-bg-gray); color: #333">bg-gray<br />var(--color-bg-gray)</div>
          </div>

          <!-- Status Colors -->
          <h4>Status Colors</h4>
          <div class="color-group">
            <div class="color-chip" style="background-color: var(--color-status-red)">red<br />var(--color-status-red)</div>
            <div class="color-chip" style="background-color: var(--color-status-orange)">orange<br />var(--color-status-orange)</div>
            <div class="color-chip" style="background-color: var(--color-status-green)">green<br />var(--color-status-green)</div>
            <div class="color-chip" style="background-color: var(--color-status-blue)">blue<br />var(--color-status-blue)</div>
          </div>

          <!-- Border Radius -->
          <h3>Border Radius</h3>
          <div class="radius-group">
            <div class="radius-chip radius-1" style="border-radius: var(--radius-1)">
              <span>radius-1</span>
              <span>0.25rem (4px)</span>
            </div>
            <div class="radius-chip radius-2" style="border-radius: var(--radius-2)">
              <span>radius-2</span>
              <span>0.5rem (8px)</span>
            </div>
            <div class="radius-chip radius-3" style="border-radius: var(--radius-3)">
              <span>radius-3</span>
              <span>0.75rem (12px)</span>
            </div>
            <div class="radius-chip radius-4" style="border-radius: var(--radius-4)">
              <span>radius-4</span>
              <span>1rem (16px)</span>
            </div>
            <div class="radius-chip radius-circle" style="border-radius: var(--radius-circle)">
              <span>radius-circle</span>
              <span>100%</span>
            </div>
            <div class="radius-chip radius-pill" style="border-radius: var(--radius-pill)">
              <span>radius-pill</span>
              <span>999px</span>
            </div>
          </div>

          <!-- Typography -->
          <h3>Typography</h3>
          <h4>Title</h4>
          <div class="typography-group">
            <!-- Heading Section -->
            <div class="font-item heading-04">
              <span>Heading-04</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-03">
              <span>Heading-03</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-02">
              <span>Heading-02</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item heading-01">
              <span>Heading-01</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>

            <!-- Title Section -->
            <div class="font-item title-01-b">
              <span>Title-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item title-01-m">
              <span>Title-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>

            <!-- Body Section -->
            <h4>Body</h4>
            <div class="font-item body-02-b">
              <span>Body-02-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-02-m">
              <span>Body-02-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-01-b">
              <span>Body-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item body-01-m">
              <span>Body-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>

            <!-- Label Section -->
            <h4>Label</h4>
            <div class="font-item label-01-b">
              <span>Label-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item label-01-m">
              <span>Label-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>

            <!-- Caption Section -->
            <h4>Caption</h4>
            <div class="font-item caption-02-b">
              <span>Caption-02-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-02-m">
              <span>Caption-02-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-01-b">
              <span>Caption-01-B</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
            <div class="font-item caption-01-m">
              <span>Caption-01-M</span>
              <p>다람쥐 헌 쳇바퀴에 타고파</p>
            </div>
          </div>

          <!-- Border Radius -->
          <h3>Spacing</h3>
          <div class="spacing-table">
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Pixels</th>
                  <th>Rem</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>spacing-2</td>
                  <td>2px</td>
                  <td>0.125rem</td>
                  <td><div class="spacing-preview" style="width: 0.125rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-4</td>
                  <td>4px</td>
                  <td>0.25rem</td>
                  <td><div class="spacing-preview" style="width: 0.25rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-6</td>
                  <td>6px</td>
                  <td>0.375rem</td>
                  <td><div class="spacing-preview" style="width: 0.375rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-8</td>
                  <td>8px</td>
                  <td>0.5rem</td>
                  <td><div class="spacing-preview" style="width: 0.5rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-12</td>
                  <td>12px</td>
                  <td>0.75rem</td>
                  <td><div class="spacing-preview" style="width: 0.75rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-16</td>
                  <td>16px</td>
                  <td>1rem</td>
                  <td><div class="spacing-preview" style="width: 1rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-20</td>
                  <td>20px</td>
                  <td>1.25rem</td>
                  <td><div class="spacing-preview" style="width: 1.25rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-24</td>
                  <td>24px</td>
                  <td>1.5rem</td>
                  <td><div class="spacing-preview" style="width: 1.5rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-32</td>
                  <td>32px</td>
                  <td>2rem</td>
                  <td><div class="spacing-preview" style="width: 2rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-40</td>
                  <td>40px</td>
                  <td>2.5rem</td>
                  <td><div class="spacing-preview" style="width: 2.5rem"></div></td>
                </tr>
                <tr>
                  <td>spacing-48</td>
                  <td>48px</td>
                  <td>3rem</td>
                  <td><div class="spacing-preview" style="width: 3rem"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'icon'" class="component-section">
        <section class="component-header">
          <h2>Icons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <h4>Default</h4>
          <p class="docs-desc">아이콘의 기본 형태</p>
          <div class="component-preview">
            <span class="icon-container" title="Link icon">
              <svg class="icon icon-default">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;svg class="icon"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
&lt;/svg&gt;
            </code></pre>
          </div>

          <h4>Current</h4>
          <p class="docs-desc">symbol의 fill과 stroke를 currentColor로 지정하여 부모의 색상을 상속받는다.</p>
          <div class="component-preview">
            <span style="color: purple">
              <span class="icon-container current-color" title="Link icon">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                </svg>
              </span>
            </span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span style="color: purple;"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Sizing</h3>
          <ul class="docs-list">
            <li>icon x-sm: 16px</li>
            <li>icon sm: 20px</li>
            <li>default: 24px</li>
            <li>icon lg: 32px</li>
            <li>icon x-lg: 40px</li>
          </ul>
          <div class="component-preview" style="display: flex; align-items: center">
            <svg class="icon x-sm">
              <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
            </svg>
            <svg class="icon sm">
              <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
            </svg>
            <svg class="icon">
              <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
            </svg>
            <svg class="icon lg">
              <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
            </svg>
            <svg class="icon x-lg">
              <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
            </svg>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;svg class="icon x-sm"&gt;
  &lt;use xlink:href="#link"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon sm"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon lg"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
&lt;/svg&gt;
&lt;svg class="icon x-lg"&gt;
  &lt;use xlink:href="@/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
&lt;/svg&gt;
            </code></pre>
          </div>

          <h3>Icons</h3>
          <ol class="docs-list" style="list-style-type: decimal; margin-left: 18px; color: #5a76aa">
            <li>아이콘을 symbols.svg 파일에 &lt;symbol&gt; 태그로 추가.</li>
            <li>&lt;use&gt; 태그로 `xlink:href` 경로와 id를 참조하여 아이콘 삽입.</li>
            <!-- <li>fill과 stroke를 `currentColor`로 변경해 부모 요소의 텍스트 색상과 연동.</li>
            <li>hover, focus, active 상태별로 CSS에서 색상 변경 가능.</li> -->
            <!-- <li>필요 시 `aria-hidden` 등 접근성 속성 추가.</li> -->
          </ol>
          <div class="component-preview">
            <ul class="docs-icon">
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Sample icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                  </span>
                  <figcaption>sample</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Visitor icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#visitor"></use>
                    </svg>
                  </span>
                  <figcaption>visitor</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Close icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close_16"></use>
                    </svg>
                  </span>
                  <figcaption>close_16</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Bluetooth icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#bluetooth"></use>
                    </svg>
                  </span>
                  <figcaption>bluetooth</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Gift icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#gift"></use>
                    </svg>
                  </span>
                  <figcaption>gift</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Sale icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                    </svg>
                  </span>
                  <figcaption>sale</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Barcode icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#barcode"></use>
                    </svg>
                  </span>
                  <figcaption>barcode</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Coupon icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#coupon"></use>
                    </svg>
                  </span>
                  <figcaption>coupon</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Location icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#location"></use>
                    </svg>
                  </span>
                  <figcaption>location</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Refresh icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#refresh"></use>
                    </svg>
                  </span>
                  <figcaption>refresh</figcaption>
                </figure>
              </li>
              <li class="docs-icon-list">
                <figure>
                  <span class="icon-container icon-link" title="Arrow Right icon">
                    <svg class="icon icon-default">
                      <use xlink:href="@/assets/images/icons/symbols.svg#arrow_right"></use>
                    </svg>
                  </span>
                  <figcaption>arrow_right</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'button'" class="component-section">
        <section class="component-header">
          <h2>Buttons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Buttons</h3>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn">Button</button>
            <button class="btn primary">Primary Button</button>
            <button class="btn secondary">Secondary Button</button>
            <button class="btn with-icon">
              <svg class="icon icon-left">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
              Button With Icon
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn primary"&gt;Primary Button&lt;/button&gt;
&lt;button class="btn secondary"&gt;Secondary Button&lt;/button&gt;
&lt;button class="btn with-icon"&gt;
  &lt;svg class="icon icon-left"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Button With Icon
&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Links</h3>
          <div class="component-preview" style="display: flex; gap: 10px">
            <router-link to="#" class="btn">Button</router-link>
            <router-link to="#" class="btn primary">Primary Button</router-link>
            <router-link to="#" class="btn secondary">Secondary Button</router-link>
            <router-link to="#" class="btn with-icon">
              <svg class="icon icon-left">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
              Button With Icon
            </router-link>
          </div>
          <div class="code-block">
            <div class="action-bar">
              <button class="copy-button" @click="copyToClipboardPub($event)">Copy</button>
            </div>
            <pre><code ref="code" class="language-html">
&lt;router-link to="#" class="btn"&gt;Button&lt;/router-link&gt;
&lt;router-link to="#" class="btn primary"&gt;Primary Button&lt;/router-link&gt;
&lt;router-link to="#" class="btn secondary"&gt;Secondary Button&lt;/router-link&gt;
&lt;router-link to="#" class="btn with-icon"&gt;
  &lt;svg class="icon icon-left"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Button With Icon
&lt;/router-link&gt;
            </code></pre>
          </div>

          <h3>Sizing</h3>
          <h4>Default</h4>
          <p class="docs-desc">기본 버튼은 <code class="doc">.btn</code> 클래스를 사용하여 생성된다. 기본 높이는 56px</p>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn">Button</button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Stretch</h4>
          <p class="docs-desc">Stretch로 변경하기 위해 <code class="doc">.stretch</code> 를 추가한다.</p>
          <div class="component-preview"><button class="btn primary stretch">Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn primary stretch"&gt;Button&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Primary</h4>
          <p class="docs-desc">색상을 Primary로 변경하기 위해 <code class="doc">.primary</code> 를 추가한다.</p>
          <div class="component-preview"><button class="btn primary">Primary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn primary"&gt;Primary Button&lt;/button&gt;
            </code></pre>
          </div>
          <h4>Secondary</h4>
          <p class="docs-desc">색상을 Secondary로 변경하기 위해 <code class="doc">.secondary</code> 를 추가한다.</p>
          <div class="component-preview"><button class="btn secondary">Secondary Button</button></div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn secondary"&gt;Secondary Button&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Button with Icon</h4>
          <p class="docs-desc">아이콘이 포함된 버튼을 만들기 위해 <code class="doc">.with-icon</code> 클래스를 추가한다.</p>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn with-icon">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
              Button With Icon
            </button>
            <button class="btn with-icon">
              Button With Icon
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn with-icon"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Button With Icon
&lt;/button&gt;
&lt;button class="btn with-icon"&gt;
  Button With Icon
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
            </code></pre>
          </div>

          <h4>Text Button</h4>
          <p class="docs-desc">텍스트 버튼을 만들기 위해 <code class="doc">.text</code> 클래스를 추가한다.</p>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn text">Text Button</button>
            <button class="btn text">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#refresh"></use>
              </svg>
              Text Button With Icon
            </button>
            <button class="btn text">
              Text Button With Icon
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#refresh"></use>
              </svg>
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn text"&gt;Text Button&lt;/button&gt;
&lt;button class="btn text"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#refresh"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Text Button With Icon
&lt;/button&gt;
&lt;button class="btn text"&gt;
  Text Button With Icon
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#refresh"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Disabled</h3>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn" disabled>Button</button>
            <button class="btn primary" disabled>Primary Button</button>
            <button class="btn secondary" disabled>Secondary Button</button>
            <button class="btn with-icon" disabled>
              <svg class="icon icon-left">
                <use xlink:href="@/assets/images/icons/symbols.svg#marker"></use>
              </svg>
              Button With Icon
            </button>
            <button class="btn text" disabled>Text Button</button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn" disabled&gt;Button&lt;/button&gt;
&lt;button class="btn primary" disabled&gt;Primary Button&lt;/button&gt;
&lt;button class="btn secondary" disabled&gt;Secondary Button&lt;/button&gt;
&lt;button class="btn with-icon" disabled&gt;
  &lt;svg class="icon icon-left"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Button With Icon
&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Button Group</h3>
          <p class="docs-desc">버튼 그룹을 만들기 위해 <code class="doc">.btn-area</code> 클래스를 사용합니다.</p>
          <div class="component-preview">
            <div class="btn-area">
              <button class="btn primary">Primary Button</button>
              <button class="btn secondary">Secondary Button</button>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="btn-area"&gt;
  &lt;button class="btn"&gt;Button&lt;/button&gt;
  &lt;button class="btn primary"&gt;Primary Button&lt;/button&gt;
  &lt;button class="btn secondary"&gt;Secondary Button&lt;/button&gt;
  &lt;button class="btn with-icon"&gt;
  &lt;svg class="icon icon-left"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#marker"&gt;&lt;/use&gt;
  &lt;/svg&gt;
  Button With Icon
  &lt;/button&gt;
&lt;/div&gt;
          </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'buttonicons'" class="component-section">
        <section class="component-header">
          <h2>Button Icons</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Button Icon</h3>
          <p class="docs-desc">아이콘 버튼을 만들기 위해 <code class="doc">.btn-icon</code> 클래스를 추가한다.</p>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn-icon">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn-icon"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Icon Button Sizes</h3>
          <ul class="docs-list">
            <li>x-sm: 16px</li>
            <li>sm: 20px</li>
            <li>default: 24px</li>
            <li>lg: 32px</li>
            <li>x-lg: 40px</li>
          </ul>
          <div class="component-preview" style="display: flex; gap: 6px; align-items: center">
            <button class="btn-icon x-sm">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon sm">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon lg">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon x-lg">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn-icon x-sm"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon sm"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon lg"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon x-lg"&gt;
  &lt;svg class="icon"&gt;
    &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Color</h4>
          <ul class="docs-list">
            <li>primary</li>
            <li>orange</li>
            <li>gray</li>
          </ul>
          <div class="component-preview" style="display: flex; gap: 10px">
            <button class="btn-icon primary">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon orange">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
            <button class="btn-icon gray">
              <svg class="icon">
                <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
              </svg>
            </button>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;button class="btn-icon primary"&gt;
  &lt;svg class="icon"&gt;
  &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon orange"&gt;
  &lt;svg class="icon"&gt;
  &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
&lt;button class="btn-icon gray"&gt;
  &lt;svg class="icon"&gt;
  &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
  &lt;/svg&gt;
&lt;/button&gt;
          </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'form'" class="component-section">
        <section class="component-header">
          <h2>Form controls</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Input</h3>
          <div class="component-preview" style="background-color: #f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" class="input" id="text-input-id-0" placeholder="Placeholder text…" />
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
    &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
    &lt;div class="form-element__control"&gt;
        &lt;input type="text" class="input" id="text-input-id-0" placeholder="Placeholder text…"&gt;
    &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Default</h4>
          <p class="docs-desc"></p>
          <div class="component-preview" style="background-color: #f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control"><input id="text-input-id-0" placeholder="Placeholder text…" class="input" /></div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; type=&quot;text&quot; class=&quot;input&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;              
              </code></pre>
          </div>

          <h4>Readonly</h4>
          <div class="component-preview">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" readonly class="input input-outline" id="text-input-id-0" value="Value" />
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input type="text" readonly class="input input-outline" id="text-input-id-0" value="Value"&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>

          <h4>Required</h4>
          <p class="docs-desc">label에 <code class="doc">abbr</code> 로 required 표시 추가</p>
          <div class="component-preview">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label<abbr class="required" title="필수 항목">* </abbr></label>
              <div class="form-element__control">
                <input type="text" required class="input input-outline" id="text-input-id-0" aria-required="true" placeholder="Placeholder text…" />
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;abbr class="required" title="필수 항목"&gt;* &lt;/abbr&gt;&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input type="text" required class="input input-outline" id="text-input-id-0" aria-required="true" placeholder="Placeholder text…"&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>

          <h4>Disabled(사용 안함)</h4>
          <p class="docs-desc">필요시 추후 수정하기..</p>
          <div class="component-preview">
            <div class="form-element">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input id="text-input-id-0" placeholder="Placeholder text…" disabled class="input input-outline" />
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; disabled type=&quot;text&quot; class=&quot;input input-outline&quot; value=&quot;&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;                        
              </code></pre>
          </div>

          <h3>Validation</h3>
          <h4>Error</h4>
          <p class="docs-desc">컨테이너에 <code class="doc">.is-error</code> 추가</p>
          <div class="component-preview" style="display: flex; flex-direction: column; gap: 40px">
            <div class="form-element is-error">
              <label class="form-element__label" for="text-input-id-0">Input Label</label>
              <div class="form-element__control">
                <input type="text" required class="input" id="text-input-id-0" placeholder="Placeholder text…" aria-describedby="error-message-id-0" aria-invalid="true" />
              </div>
              <p class="form-feedback" id="error-message-id-0">Enter a value.</p>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element is-error"&gt;
  &lt;label class="form-element__label" for="text-input-id-0"&gt;Input Label&lt;/label&gt;
  &lt;div class="form-element__control"&gt;
    &lt;input id="text-input-id-0" placeholder="Placeholder text…" required aria-describedby="error-message-id-0" class="input" aria-invalid="true"&gt;
  &lt;/div&gt;
  &lt;p class="form-feedback" id="error-message-id-0"&gt;Enter a value.&lt;/p&gt;
&lt;/div&gt; 
              </code></pre>
          </div>

          <h3>Search</h3>
          <h4>Base</h4>
          <div class="component-preview">
            <div class="form-element">
              <label class="form-element__label" for="search">Input Label</label>
              <div class="form-element__control input-has-icon">
                <input 
                    type="text" 
                    id="search" 
                    class="input input-search" 
                    placeholder="Placeholder text…"
                    autocomplete="off"
                  >
                <button class="btn-icon" aria-label="검색">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#search"></use>
                  </svg>
                </button>
                <button 
                  type="button" 
                  class="btn-icon clear" 
                  aria-label="삭제">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#delete"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;search&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control input-has-icon&quot;&gt;
    &lt;input 
      type=&quot;text&quot; 
      id=&quot;search&quot; 
      class=&quot;input input-search&quot; 
      placeholder=&quot;Placeholder text…&quot;
      autocomplete=&quot;off&quot;
      v-model=&quot;searchText&quot;
    &gt;
    &lt;button class=&quot;btn-icon&quot; aria-label=&quot;검색&quot;&gt;
      &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#search&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
    &lt;button 
      type=&quot;button&quot; 
      class=&quot;btn-icon clear&quot; 
      @click=&quot;clearSearch&quot; 
      v-show=&quot;searchText&quot;
      aria-label=&quot;삭제&quot;&gt;
      &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#delete&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'select'" class="component-section">
        <section class="component-header">
          <h2>Select</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Select</h3>
          <h4>Default</h4>
          <div class="component-preview" style="background-color: #f5f5f5">
            <div class="form-element">
              <label class="form-element__label" for="select-01">Select Label</label>
              <div class="select_container">
                <select class="select" id="select-01">
                  <option value="">Select…</option>
                  <option value="option1">Option One</option>
                  <option value="option2">Option Two</option>
                  <option value="option3">Option</option>
                </select>
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#arrow_down"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;label class=&quot;form-element__label&quot; for=&quot;text-input-id-0&quot;&gt;Input Label&lt;/label&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;input id=&quot;text-input-id-0&quot; placeholder=&quot;Placeholder text…&quot; type=&quot;text&quot; class=&quot;input&quot; value=&quot;&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;              
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'checkbox'" class="component-section">
        <section class="component-header">
          <h2>Checkbox</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox">
                  <input type="checkbox" name="options" id="checkbox-unique-id-3" value="checkbox-unique-id-3" checked />
                  <label class="checkbox__label" for="checkbox-unique-id-3">
                    <span class="checkbox_faux">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#check"></use>
                      </svg>
                    </span>
                    <span class="form-element__label">Checkbox Label</span></label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="form-element"&gt;
  &lt;div class="form-element__control"&gt;
    &lt;div class="checkbox"&gt;
      &lt;input type="checkbox" name="options" id="checkbox-unique-id-3" value="checkbox-unique-id-3" checked&gt;
      &lt;label class="checkbox__label" for="checkbox-unique-id-3"&gt;
        &lt;span class="checkbox_faux"&gt;
          &lt;svg class="icon"&gt;
            &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
          &lt;/svg&gt;
        &lt;/span&gt; 
        &lt;span class="form-element__label"&gt;Checkbox Label&lt;/span&gt;
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;          
              </code></pre>
          </div>

          <h3>Switch</h3>
          <p class="docs-desc">.checkbox에 label <code class="doc">.switch</code> 를 추가</p>
          <div class="component-preview">
            <div class="form-element">
              <div class="form-element__control">
                <div class="checkbox left_label">
                  <span class="form-element__label">{{ isAllowed ? "Enabled" : "Disabled" }}</span>
                  <label class="switch" for="permissionSwitch">
                    <input type="checkbox" id="permissionSwitch" v-model="isAllowed" />
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class=&quot;form-element&quot;&gt;
  &lt;div class=&quot;form-element__control&quot;&gt;
    &lt;div class=&quot;checkbox left_label&quot;&gt;
      <span class="form-element__label">{{ isAllowed ? 'Enabled' : 'Disabled' }}</span>
      &lt;label class=&quot;switch&quot; for=&quot;permissionSwitch&quot;&gt;
        &lt;input
          type=&quot;checkbox&quot;
          id=&quot;permissionSwitch&quot;
          v-model=&quot;isAllowed&quot;
        &gt;
        &lt;span class=&quot;slider&quot;&gt;&lt;/span&gt;
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'badge'" class="component-section">
        <section class="component-header">
          <h2>Badges</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Default</h3>
          <div class="component-preview" style="display: flex; gap: 8px">
            <span class="badge">공유중</span>
            <span class="badge focus">관심</span>
            <span class="badge restrict">채팅제한</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class=&quot;badge&quot;&gt;공유중&lt;/span&gt;
&lt;span class=&quot;badge focus&quot;&gt;관심&lt;/span&gt;
&lt;span class=&quot;badge restrict&quot;&gt;채팅제한&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Status</h3>
          <div class="component-preview" style="display: flex; gap: 8px">
            <span class="badge status">수업중</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class=&quot;badge status&quot;&gt;수업중&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Count</h3>
          <div class="component-preview" style="display: flex; gap: 8px">
            <span class="badge count" aria-live="polite" aria-label="24개의 새로운 메시지">24</span>
            <span class="badge count" aria-live="polite" aria-label="300개 이상의 새로운 메시지">300+</span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="badge count" aria-live="polite" aria-label="24개의 새로운 메시지"&gt;24&lt;/span&gt;
&lt;span class="badge count" aria-live="polite" aria-label="300개 이상의 새로운 메시지"&gt;300+&lt;/span&gt;
            </code></pre>
          </div>

          <h3>Unread</h3>
          <div class="component-preview" style="display: flex; gap: 8px">
            <span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"></span>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;span class="badge unread" aria-live="polite" aria-label="읽지 않은 메시지"&gt;&lt;/span&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'header'" class="component-section">
        <section class="component-header">
          <h2>Header</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Main</h3>
          <div class="component-preview" style="background-color: #f4f6f9">
            <header class="header">
              <div class="header-inner" role="banner">
                <h1 class="logo">
                  <img src="@/assets/images/logo/logo.png" alt="행복을 파는 용인중앙시장" aria-label="용인중앙시장 - 메인으로 이동" width="125" height="56" />
                </h1>
                <div class="visitor-info" role="status" aria-live="polite">
                  <svg class="icon" role="img" aria-label="방문자 아이콘">
                    <use xlink:href="@/assets/images/icons/symbols.svg#visitor"></use>
                  </svg>
                  <span class="visitor-count">1234</span>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;header class=&quot;header&quot;&gt;
  &lt;div class=&quot;header-inner&quot; role=&quot;banner&quot;&gt;
    &lt;h1 class=&quot;logo&quot;&gt;
      &lt;img src=&quot;@/assets/images/logo/logo.png&quot; alt=&quot;행복을 파는 용인중앙시장&quot; aria-label=&quot;용인중앙시장 - 메인으로 이동&quot; width=&quot;125&quot; height=&quot;56&quot; /&gt;
    &lt;/h1&gt;
    &lt;div class=&quot;visitor-info&quot; role=&quot;status&quot; aria-live=&quot;polite&quot;&gt;
      &lt;svg class=&quot;icon&quot; role=&quot;img&quot; aria-label=&quot;방문자 아이콘&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#visitor&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span class=&quot;visitor-count&quot;&gt;1234&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;
            </code></pre>
          </div>

          <h3>Sub</h3>
          <h4>Default</h4>
          <div class="component-preview" style="background-color: #f4f6f9">
            <header class="sub-header">
              <div class="sub-header-inner">
                <button class="btn-icon btn-back" aria-label="이전 페이지로 돌아가기">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#back"></use>
                  </svg>
                </button>
                <h1 class="title">타이틀</h1>
                <div class="right-area">
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;header class=&quot;sub-header&quot;&gt;
  &lt;div class=&quot;sub-header-inner&quot;&gt;
    &lt;button class=&quot;btn-icon btn-back&quot; aria-label=&quot;이전 페이지로 돌아가기&quot;&gt;
      &lt;svg class=&quot;icon&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#back&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
    &lt;h1 class=&quot;title&quot;&gt;타이틀&lt;/h1&gt;
    &lt;div class=&quot;right-area&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;
            </code></pre>
          </div>

          <h4>Detail</h4>
          <ul class="docs-list">
            <li><code class="doc">is-detail</code> 클래스 추가</li>
            <li>서브 상세페이지에서 사용</li>
          </ul>
          <div class="component-preview" style="background-color: #f4f6f9">
            <header class="sub-header">
              <div class="sub-header-inner is-detail">
                <button class="btn-icon btn-back" aria-label="이전 페이지로 돌아가기">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#back"></use>
                  </svg>
                </button>
                <h1 class="title">타이틀</h1>
                <div class="right-area">
                  <button class="btn-icon" aria-label="비콘 위치정보">
                    <svg class="icon">
                      <use xlink:href="@/assets/images/icons/symbols.svg#map"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;header class=&quot;sub-header&quot;&gt;
  &lt;div class=&quot;sub-header-inner is-detail&quot;&gt;
    &lt;button class=&quot;btn-icon btn-back&quot; aria-label=&quot;이전 페이지로 돌아가기&quot;&gt;
      &lt;svg class=&quot;icon&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#back&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
    &lt;h1 class=&quot;title&quot;&gt;타이틀&lt;/h1&gt;
    &lt;div class=&quot;right-area&quot;&gt;
      &lt;button class=&quot;btn-icon&quot; aria-label=&quot;비콘 위치정보&quot;&gt;
        &lt;svg class=&quot;icon&quot;&gt;
          &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#map&quot;&gt;&lt;/use&gt;
        &lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;
            </code></pre>
          </div>

          <h4>이전 버튼만 존재할 때</h4>
          <ul class="docs-list">
            <li><code class="doc">is-only</code> 클래스 추가</li>
          </ul>
          <div class="component-preview" style="background-color: #f4f6f9">
            <header class="sub-header">
              <div class="sub-header-inner is-only">
                <button class="btn-icon btn-back" aria-label="이전 페이지로 돌아가기">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#back"></use>
                  </svg>
                </button>
              </div>
            </header>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;header class=&quot;sub-header&quot;&gt;
  &lt;div class=&quot;sub-header-inner is-only&quot;&gt;
    &lt;button class=&quot;btn-icon btn-back&quot; aria-label=&quot;이전 페이지로 돌아가기&quot;&gt;
      &lt;svg class=&quot;icon&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#back&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/header&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'coupon'" class="component-section">
        <section class="component-header">
          <h2>Coupon</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <ul class="docs-list">
            <li>2줄 이상 ellipsis처리</li>
            <li>쿠폰의 타이틀 영역에 최대 넓이 128px</li>
          </ul>
          <div class="component-preview">
            <article class="coupon primary" style="min-width: initial; max-width: 208px">
              <div class="coupon-left">
                <strong class="coupon-title">2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. </strong>
                <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
              </div>
              <div class="coupon-right">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                </svg>
              </div>
            </article>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;article class="coupon primary"&gt;
  &lt;div class="coupon-left"&gt;
    &lt;strong class="coupon-title"&gt;2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. &lt;/strong&gt;
    &lt;p class="coupon-details"&gt;2024.10.18 ~ 2024.11.17&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="coupon-right"&gt;
    &lt;svg class="icon"&gt;
      &lt;use xlink:href="@/assets/images/icons/symbols.svg#gift"&gt;&lt;/use&gt;
    &lt;/svg&gt;
  &lt;/div&gt;
&lt;/article&gt;
            </code></pre>
          </div>

          <h3>Variations</h3>
          <h4>Color</h4>
          <ul class="docs-list">
            <li>Primary</li>
            <li>Secondary</li>
          </ul>
          <div class="component-preview" style="display: flex; gap: 16px">
            <article class="coupon primary" style="min-width: initial; max-width: 208px">
              <div class="coupon-left">
                <strong class="coupon-title">2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. </strong>
                <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
              </div>
              <div class="coupon-right">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#sale"></use>
                </svg>
              </div>
            </article>
            <article class="coupon secondary" style="min-width: initial; max-width: 208px">
              <div class="coupon-left">
                <strong class="coupon-title">2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. </strong>
                <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
              </div>
              <div class="coupon-right">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#gift"></use>
                </svg>
              </div>
            </article>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;article class="coupon primary"&gt;
  ...
&lt;/article&gt;
&lt;article class="coupon secondary"&gt;
  ...
&lt;/article&gt;
            </code></pre>
          </div>

          <h4>Sizing</h4>
          <p class="docs-desc">Large 사이즈로 변경하기 위해 coupon에 <code class="doc">lg</code> 클래스 추가</p>
          <div class="component-preview" style="display: flex; gap: 16px">
            <article class="coupon primary lg" style="min-width: initial; max-width: 320px">
              <div class="coupon-left">
                <strong class="coupon-title">2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. </strong>
                <p class="coupon-details">1인1메뉴 및 사이드 메뉴 추가 주문 시 사용가능</p>
                <p class="coupon-period">2024.10.18 ~ 2024.11.17</p>
              </div>
              <div class="coupon-right">
                <button class="coupon-action">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#barcode"></use>
                  </svg>
                  <span>사용하기</span>
                </button>
              </div>
            </article>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;article class=&quot;coupon primary lg&quot;&gt;
  &lt;div class=&quot;coupon-left&quot;&gt;
    &lt;strong class=&quot;coupon-title&quot;&gt;2줄이 넘어가는 글자수의 쿠폰 타이틀입니다. &lt;/strong&gt;
    &lt;p class=&quot;coupon-details&quot;&gt;1인1메뉴 및 사이드 메뉴 추가 주문 시 사용가능&lt;/p&gt;
    &lt;p class=&quot;coupon-period&quot;&gt;2024.10.18 ~ 2024.11.17&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;coupon-right&quot;&gt;
    &lt;button class=&quot;coupon-action&quot;&gt;
      &lt;svg class=&quot;icon&quot;&gt;
        &lt;use xlink:href=&quot;@/assets/images/icons/symbols.svg#barcode&quot;&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span&gt;사용하기&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/article&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'toast'" class="component-section">
        <section class="component-header">
          <h2>Toast</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <div class="toast-container relative">
              <div class="toast" role="status">
                <p class="toast-content">
                  <svg class="icon">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                  </svg>
                  <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                </p>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="toast-container relative"&gt;
  &lt;div class="toast" role="status"&gt;
    &lt;p class="toast-content"&gt;
      &lt;svg class="icon"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span&gt;‘아르고스의 과학수업’ 수업을 추가 했습니다.&lt;/span&gt;
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;       
            </code></pre>
          </div>

          <h3>Toast Closeable</h3>
          <div class="component-preview relative">
            <article class="toast-container" aria-live="polite" style="position: relative; left: 50%">
              <section class="toast closeable" role="status">
                <p class="toast-content">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                  </svg>
                  <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                </p>
                <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false">
                  <svg class="button__icon" aria-hidden="true">
                    <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                  </svg>
                </button>
              </section>
            </article>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;article class="toast-container" aria-live="polite"&gt;
  &lt;section class="toast closeable" role="status"&gt;
    &lt;p class="toast-content"&gt;
      &lt;svg class="icon" aria-hidden="true"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
      &lt;/svg&gt;
      &lt;span&gt;‘아르고스의 과학수업’ 수업을 추가 했습니다.&lt;/span&gt;
    &lt;/p&gt;
    &lt;button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false"&gt;
      &lt;svg class="button__icon" aria-hidden="true"&gt;
        &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/section&gt;
&lt;/article&gt;     
            </code></pre>
          </div>

          <h3>Transition</h3>
          <h4>Top</h4>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast2">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast2" class="toast-container top" aria-live="polite">
                <section class="toast closeable" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast2 = false">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container top" aria-live="polite"&gt;
    &lt;section class="toast closeable" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;              
            </code></pre>
          </div>

          <h4>Bottom</h4>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast" class="toast-container bottom" aria-live="polite">
                <section class="toast closeable" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                  <button class="button button_icon button_icon-x-small" title="닫기" aria-label="닫기" @click="showToast = false">
                    <svg class="button__icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                  </button>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container bottom" aria-live="polite"&gt;
    &lt;section class="toast closeable" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;          
            </code></pre>
          </div>

          <h4>With SNB</h4>
          <p class="docs-desc">사이드바가 있는 화면에서 포지션 변경을 위해 <code class="doc">.with-snb</code> 적용</p>
          <div class="component-preview relative">
            <button class="button button_outline-primary" @click="triggerToast3">Show Toast</button>
            <Transition name="toast">
              <article v-if="showToast3" class="toast-container bottom with-snb" aria-live="polite">
                <section class="toast" role="status">
                  <p class="toast-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                    </svg>
                    <span>‘아르고스의 과학수업’ 수업을 추가 했습니다.</span>
                  </p>
                </section>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="toast"&gt;
  &lt;article v-if="showToast" class="toast-container bottom with-snb" aria-live="polite"&gt;
    &lt;section class="toast" role="status"&gt;
      ...
    &lt;/section&gt;
  &lt;/article&gt;
&lt;/Transition&gt;              
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'dialog'" class="component-section">
        <section class="component-header">
          <h2>Dialog</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal1 = true">Modal Open</button>
            <Transition name="fade">
              <section v-if="showModal1" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달 제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal1 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="fade"&gt;
  &lt;section v-if="showModal1" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
    &lt;div class="modal-dialog lg"&gt;
      &lt;div class="modal-content"&gt;
        &lt;div class="modal-header"&gt;
          &lt;h5 id="modal-heading-01" class="modal-title" tabindex="-1"&gt;
            모달 제목
          &lt;/h5&gt;
        &lt;/div&gt;
        &lt;div class="modal-body" id="modal-content-id-1"&gt;
          &lt;p&gt;모달 내용&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="modal-footer"&gt;
          &lt;button class="button button_outline-primary button_large" @click="showModal1 = false"&gt;
            취소
          &lt;/button&gt;
          &lt;button class="button button_primary button_large"&gt;
            확인
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/Transition&gt;

            </code></pre>
          </div>

          <h3>Sizing</h3>
          <h4>Small</h4>
          <p class="docs-desc">Alert에 사용되는 Small 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>320px</li>
            <li>요소 간격 24px과 중앙 정렬 스타일이 포함됨</li>
            <li>버튼 사이즈 default (40px)</li>
            <li>modal-dialog 에 <code class="doc">sm</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal2 = true">Modal Open</button>
            <!-- Small 사이즈: Alert 모달 -->
            <Transition name="fade">
              <section v-if="showModal2" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달 제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_primary" @click="showModal2 = false">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog sm"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>Medium</h4>
          <p class="docs-desc">채팅방 설정, 파일 전송 시 사용되는 Medium 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>360px</li>
            <li>modal-dialog 에 <code class="doc">md</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal3 = true">Modal Open</button>
            <!-- Medium 사이즈: 채팅 설정, 파일 첨부 모달 -->
            <Transition name="fade">
              <section v-if="showModal3" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달 제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_primary button_large" @click="showModal3 = false">전송</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog md"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>Large</h4>
          <p class="docs-desc">Confirm 또는 사용자 입력(예: 폼 작성)에 사용되는 Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>480px</li>
            <li>modal-dialog 에 <code class="doc">lg</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal4 = true">Modal Open</button>
            <!-- Large 사이즈: Confirm 및 사용자 입력 모달 -->
            <Transition name="fade">
              <section v-if="showModal4" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달 제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal4 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>X-Large</h4>
          <p class="docs-desc">내 화면 공유에 사용되는 X-Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>720px</li>
            <li>modal-dialog 에 <code class="doc">x-lg</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal5 = true">Modal Open</button>
            <!-- X-Large 사이즈: 화면 공유 모달 -->
            <Transition name="fade">
              <section v-if="showModal5" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog x-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal5 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog x-lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h4>XX-Large</h4>
          <p class="docs-desc">페이징 테이블에 사용되는 XX-Large 사이즈 다이얼로그</p>
          <ul class="docs-list">
            <li>960px</li>
            <li>modal-dialog 에 <code class="doc">xx-lg</code> 클래스 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal5 = true">Modal Open</button>
            <!-- XX-Large 사이즈: 페이징 테이블 모달 -->
            <Transition name="fade">
              <section v-if="showModal5" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog xx-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal5 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal"&gt;
  &lt;div class="modal-dialog xx-lg"&gt;
    ...
  &lt;/div&gt;
&lt;/section&gt;
            </code></pre>
          </div>

          <h3>Transition</h3>
          <h4>Default (Fade In/Out)</h4>
          <p class="docs-desc"></p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">fade</code> 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal6 = true">Modal Open</button>
            <Transition name="fade">
              <section v-if="showModal6" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal6 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="fade"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h4>Zoom In/Out</h4>
          <p class="docs-desc">등장 시 확대(Zoom In), 퇴장 시 축소(Zoom Out)</p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">zoom</code> 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal7 = true">Modal Open</button>
            <Transition name="zoom">
              <section v-if="showModal7" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal7 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="zoom"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>

          <h4>Zoom Out/In</h4>
          <p class="docs-desc">등장 시 축소(Zoom Out), 퇴장 시 확대(Zoom In)</p>
          <ul class="docs-list">
            <li>Transition에 <code class="doc">zoom-reverse</code> 적용</li>
          </ul>
          <div class="component-preview">
            <button class="button button_outline-primary" @click="showModal8 = true">Modal Open</button>
            <Transition name="zoom-reverse">
              <section v-if="showModal8" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="modal">
                <div class="modal-dialog lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 id="modal-heading-01" class="modal-title" tabindex="-1">모달제목</h5>
                    </div>
                    <div class="modal-body" id="modal-content-id-1">
                      <p>모달 내용</p>
                    </div>
                    <div class="modal-footer">
                      <button class="button button_outline-primary button_large" @click="showModal8 = false">취소</button>
                      <button class="button button_primary button_large">확인</button>
                    </div>
                  </div>
                </div>
              </section>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name="zoom-reverse"&gt;
  ...
&lt;/Transition&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'alert'" class="component-section">
        <section class="component-header">
          <h2>Alert</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Alert</h3>
          <div class="component-preview">
            <Transition name="alert">
              <article v-show="isAlert" class="alert" aria-live="polite">
                <div class="alert-inner closeable" role="alert">
                  <p class="alert-content">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#bluetooth"></use>
                    </svg>
                    <span>블루투스를 켜고 주변 상점 쿠폰을 받아보세요!</span>
                  </p>
                  <button class="btn-icon" title="닫기" aria-label="닫기" @click="closeAlert">
                    <svg aria-hidden="true">
                      <use xlink:href="@/assets/images/icons/symbols.svg#close_16"></use>
                    </svg>
                  </button>
                </div>
              </article>
            </Transition>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;Transition name=&quot;alert&quot;&gt;
  &lt;article v-show=&quot;isAlert&quot; class=&quot;alert&quot; aria-live=&quot;polite&quot;&gt;
    &lt;div class=&quot;alert-inner closeable&quot; role=&quot;alert&quot;&gt;
      &lt;p class=&quot;alert-content&quot;&gt;
        &lt;svg class=&quot;icon&quot; aria-hidden=&quot;true&quot;&gt;
          &lt;use xlink:href=&quot;&#64;/assets/images/icons/symbols.svg#bluetooth&quot;&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;span&gt;블루투스를 켜고 주변 상점 쿠폰을 받아보세요!&lt;/span&gt;
      &lt;/p&gt;
      &lt;button class=&quot;btn-icon&quot; title=&quot;닫기&quot; aria-label=&quot;닫기&quot; @click=&quot;closeAlert&quot;&gt;
        &lt;svg aria-hidden=&quot;true&quot;&gt;
          &lt;use xlink:href=&quot;&#64;/assets/images/icons/symbols.svg#close_16&quot;&gt;&lt;/use&gt;
        &lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/article&gt;
&lt;/Transition&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'bottomsheet'" class="component-section">
        <section class="component-header">
          <h2>Bottom Sheet</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Bottom Sheet</h3>
          <h4>Default</h4>
          <div class="component-preview">
            <button class="btn primary" @click="isBottomSheet = true">Bottom Sheet</button>
            <Transition name="bottom-sheet">
              <div v-if="isBottomSheet" class="bottom-sheet-wrapper">
                <!-- 배경 오버레이 -->
                <div class="bottom-sheet-overlay"></div>

                <!-- 바텀시트 본체 -->
                <div class="bottom-sheet">
                  <!-- 바텀시트 헤더: 타입별 클래스 적용 -->
                  <div class="bottom-sheet-header">
                    <button class="btn-icon" @click="isBottomSheet = false">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                      </svg>
                    </button>
                  </div>
                  <div class="bottom-sheet-content with-image qr">
                    <p class="title-01-b">
                      QR코드 스캔하고<br />
                      중앙시장APP 친구와 함께 써요
                    </p>
                    <figure class="pic-area">
                      <img src="@/assets/images/temp/qr_sample.png" alt="QR 코드" />
                    </figure>
                  </div>
                  <div class="bottom-sheet-footer">
                    <div class="btn-area">
                      <button class="btn with-icon">
                        <svg class="icon sm">
                          <use xlink:href="@/assets/images/icons/symbols.svg#share"></use></svg>공유하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>

          <h4>With Title</h4>
          <div class="component-preview">
            <button class="btn primary" @click="isBottomSheet2 = true">Bottom Sheet</button>
            <Transition name="bottom-sheet">
              <div v-if="isBottomSheet2" class="bottom-sheet-wrapper">
                <!-- 배경 오버레이 -->
                <div class="bottom-sheet-overlay"></div>

                <!-- 바텀시트 본체 -->
                <div class="bottom-sheet">
                  <!-- 바텀시트 헤더: 타입별 클래스 적용 -->
                  <div class="bottom-sheet-header with-title">
                    <h2 class="title">필수 권한 설정 안내</h2>
                    <button class="btn-icon" @click="isBottomSheet2 = false">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#close"></use>
                      </svg>
                    </button>
                  </div>
                  <div class="bottom-sheet-content with-image qr">
                    <p class="title-01-b">
                      QR코드 스캔하고<br />
                      중앙시장APP 친구와 함께 써요
                    </p>
                    <figure class="pic-area">
                      <img src="@/assets/images/temp/qr_sample.png" alt="QR 코드" />
                    </figure>
                  </div>
                  <div class="bottom-sheet-footer">
                    <div class="btn-area">
                      <button class="btn secondary" @click="isBottomSheet2 = false">나중에 하기</button>
                      <button class="btn primary">권한 설정하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">

            </code></pre>
          </div>
        </section>
      </div>

      <div v-show="activePubComponent === 'tabs'" class="component-section">
        <section class="component-header">
          <h2>Tabs</h2>
          <ul>
            <li>HTML/CSS: Dev Ready</li>
            <li>Mobile</li>
          </ul>
        </section>
        <section class="component-main">
          <h3>Base</h3>
          <p class="docs-desc">사용안함 (퍼블 확인용)</p>
          <div class="component-preview">
            <div class="tabs">
              <ul class="tabs__nav" role="tablist">
                <li class="tabs__item is-active" title="Item One" role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item">Item One</button>
                </li>
                <li class="tabs__item" title="Item Two" role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item">Item Two</button>
                </li>
                <li class="tabs__item" title="Item " role="presentation">
                  <button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item">Item</button>
                </li>
              </ul>
              <div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item">Item One Content</div>
              <div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item">Item Two Content</div>
              <div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item">Item Content</div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item is-active" title="Item One" role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item"&gt;Item One&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="Item Two" role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item"&gt;Item Two&lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="Item " role="presentation"&gt;
      &lt;button class="tabs__link" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item"&gt;Item &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item"&gt;
    Item One Content
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item"&gt;
    Item Two Content
  &lt;/div&gt;
  &lt;div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item"&gt;
    Item  Content
  &lt;/div&gt;
&lt;/div&gt;            
            </code></pre>
          </div>
          <h3>With Icon</h3>
          <p class="docs-desc">탭의 컨테이너에 flex속성 <code class="doc">.tabs_flex</code>를 추가한다. 아이콘 탭으로 변경하기 위해 <code class="doc">.tabs__with-icon</code>를 추가한다.</p>
          <div class="component-preview">
            <div style="width: 320px">
              <div class="tabs tabs_flex">
                <ul class="tabs__nav" role="tablist">
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 0 }" title="채팅" role="presentation">
                    <button class="tabs__link tabs__with-icon" role="tab" tabindex="0" :aria-selected="activeTabIcon === 0" aria-controls="tab-1" id="tab-1__item" @click="activeTabIcon = 0">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                      </svg>
                      <b class="tabs__label">채팅</b>
                    </button>
                  </li>
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 1 }" title="학생" role="presentation">
                    <button class="tabs__link tabs__with-icon" role="tab" tabindex="-1" :aria-selected="activeTabIcon === 1" aria-controls="tab-2" id="tab-2__item" @click="activeTabIcon = 1">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                      </svg>
                      <b class="tabs__label">학생</b>
                    </button>
                  </li>
                  <li class="tabs__item" :class="{ 'is-active': activeTabIcon === 2 }" title="정보" role="presentation">
                    <button class="tabs__link tabs__with-icon" role="tab" tabindex="-1" :aria-selected="activeTabIcon === 2" aria-controls="tab-3" id="tab-3__item" @click="activeTabIcon = 2">
                      <svg class="icon">
                        <use xlink:href="@/assets/images/icons/symbols.svg#sample"></use>
                      </svg>
                      <b class="tabs__label">정보</b>
                    </button>
                  </li>
                </ul>
                <div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTabIcon === 0">Item One Content</div>
                <div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTabIcon === 1">Item Two Content</div>
                <div id="tab-3" class="tabs__content" role="tabpanel" aria-labelledby="tab-3__item" v-show="activeTabIcon === 2">Item Content</div>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs tabs_flex"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item is-active" title="채팅" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-1" id="tab-1__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;채팅&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="학생" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;학생&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" title="정보" role="presentation"&gt;
      &lt;button class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-3" id="tab-3__item"&gt;
        &lt;svg class="icon"&gt;
          &lt;use xlink:href="&#64;/assets/images/icons/symbols.svg#sample"&gt;&lt;/use&gt;
        &lt;/svg&gt;
        &lt;b class="tabs__label"&gt;정보&lt;/b&gt;
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;div id="tab-1" class="tabs__content show" role="tabpanel" aria-labelledby="tab-1__item"&gt;
    Item One Content
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item"&gt;
    Item Two Content
  &lt;/div&gt;
  &lt;div id="tab-3" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-3__item"&gt;
    Item  Content
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>

          <h3>화면공유 탭</h3>
          <p class="docs-desc">탭의 컨테이너에 <code class="doc">.share</code> 추가됨</p>
          <div class="component-preview">
            <div class="tabs share" style="max-width: 656px">
              <ul class="tabs__nav" role="tablist">
                <li class="tabs__item" :class="{ 'is-active': activeTab === 0 }" role="presentation">
                  <button class="tabs__link" role="tab" tabindex="0" :aria-selected="activeTab === 0" aria-controls="tab-1" id="tab-1__item" @click="activeTab = 0">
                    <span>모니터</span>
                    <i class="icon-check"></i>
                  </button>
                </li>
                <li class="tabs__item" :class="{ 'is-active': activeTab === 1 }" role="presentation">
                  <button class="tabs__link" role="tab" tabindex="-1" :aria-selected="activeTab === 1" aria-controls="tab-2" id="tab-2__item" @click="activeTab = 1">
                    <span>창</span>
                    <i class="icon-check"></i>
                  </button>
                </li>
              </ul>

              <div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTab === 0">
                <p style="text-align: center">Contents1</p>
              </div>
              <div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTab === 1">
                <p style="text-align: center">Contents2</p>
              </div>
            </div>
          </div>
          <div class="code-block">
            <div class="action-bar"><button class="copy-button" @click="copyToClipboardPub($event)">Copy</button></div>
            <pre><code ref="code" class="language-html">
&lt;div class="tabs share"&gt;
  &lt;ul class="tabs__nav" role="tablist"&gt;
    &lt;li class="tabs__item" :class="{ 'is-active': activeTab === 0 }" role="presentation"&gt;
      &lt;button
        class="tabs__link"
        role="tab"
        tabindex="0"
        :aria-selected="activeTab === 0"
        aria-controls="tab-1"
        id="tab-1__item"
        @click="activeTab = 0"
      &gt;
        &lt;span&gt;모니터&lt;/span&gt;
        &lt;i class="icon-check"&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/li&gt;
    &lt;li class="tabs__item" :class="{ 'is-active': activeTab === 1 }" role="presentation"&gt;
      &lt;button
        class="tabs__link"
        role="tab"
        tabindex="-1"
        :aria-selected="activeTab === 1"
        aria-controls="tab-2"
        id="tab-2__item"
        @click="activeTab = 1"
      &gt;
        &lt;span&gt;창&lt;/span&gt;
        &lt;i class="icon-check"&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;div id="tab-1" class="tabs__content" role="tabpanel" aria-labelledby="tab-1__item" v-show="activeTab === 0"&gt;
    &lt;section class="share-container"&gt;
      Contents1
    &lt;/section&gt;
  &lt;/div&gt;
  &lt;div id="tab-2" class="tabs__content" role="tabpanel" aria-labelledby="tab-2__item" v-show="activeTab === 1"&gt;
    &lt;section class="share-container"&gt;
      Contents2
    &lt;/section&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code></pre>
          </div>
        </section>
      </div>

      <!-- 추가 섹션들 -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
// ## 퍼블리싱 작업용 의존성 설치
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-coy.css";

const isSNB = ref(true);
const isAlert = ref(true);
const isBottomSheet = ref(false);
const isBottomSheet2 = ref(false);

const onClickToggle = () => {
  isSNB.value = !isSNB.value;
};

// 알럿 배너 닫기
const closeAlert = () => {
  isAlert.value = false;
};

// 사이드바 링크
const activePubComponent = ref("bottomsheet");
const SidebarPubLinks = [
  { name: "Design Token", component: "token" },
  { name: "Icon", component: "icon" },
  { name: "Button", component: "button" },
  { name: "Button Icon", component: "buttonicons" },
  { name: "Form Control", component: "form" },
  { name: "Select", component: "select" },
  { name: "Checkbox", component: "checkbox" },
  // { name: "Badge", component: "badge" },
  // { name: "Toast", component: "toast" },
  // { name: "Dialog", component: "dialog" },
  { name: "Alert", component: "alert" },
  { name: "Bottom Sheet", component: "bottomsheet" },
  { name: "Coupon", component: "coupon" },
  // { name: "Tab", component: "tabs" },
  { name: "Header", component: "header" },
];

// 코드 블록 하이라이팅
const highlightPubCode = () => {
  const codeBlocks = document.querySelectorAll("code");
  codeBlocks.forEach((block) => {
    Prism.highlightElement(block);
  });
};

// 클립보드에 복사
const copyToClipboardPub = (event) => {
  const codeBlock = event.target.closest(".code-block").querySelector("code").innerText.trim();

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeBlock;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  const button = event.target;
  const originalText = button.innerText;
  button.innerText = "Copied!";
  setTimeout(() => {
    button.innerText = originalText;
  }, 1000);
};

// 라이프사이클 훅
onMounted(() => {
  highlightPubCode();
});

onUpdated(() => {
  highlightPubCode();
});
</script>

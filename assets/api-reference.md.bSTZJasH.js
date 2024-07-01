import{_ as e,c as o,o as l,a1 as a}from"./chunks/framework.B5alDmP7.js";const b=JSON.parse('{"title":"API Reference","description":"","frontmatter":{},"headers":[],"relativePath":"api-reference.md","filePath":"api-reference.md","lastUpdated":1719869141000}'),t={name:"api-reference.md"},i=a('<h1 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="model-value" tabindex="-1">model-value <a class="header-anchor" href="#model-value" aria-label="Permalink to &quot;model-value&quot;">​</a></h3><ul><li><p><strong>Type</strong>:</p><ul><li><code>(OptionType)[]</code> if <code>multiple</code> is <code>true</code></li><li><code>(OptionType | EmptyModelValueType)</code> if <code>multiple</code> is <code>false</code></li></ul></li><li><p><strong>Details</strong>:</p><p>Required.</p><p>The selected options.</p></li></ul><h3 id="empty-model-value" tabindex="-1">empty-model-value <a class="header-anchor" href="#empty-model-value" aria-label="Permalink to &quot;empty-model-value&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>EmptyModelValueType = any</code></p></li><li><p><strong>Default</strong>: <code>null</code></p></li><li><p><strong>Details</strong>:</p><p>Only works if <code>multiple</code> is <code>false</code>.</p><p>If there is no selecting option, <code>update:modelValue</code> event will emit this value.</p></li></ul><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>OptionType[] = any[]</code></p></li><li><p><strong>Details</strong>:</p><p>Required.</p></li></ul><h3 id="visible-options" tabindex="-1">visible-options <a class="header-anchor" href="#visible-options" aria-label="Permalink to &quot;visible-options&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>OptionType[]</code></p></li><li><p><strong>Details</strong>:</p><p>This would be useful if you have options, but you only want to display partial of those option.</p><p>You could use this feature to implement customize filtering, remote searching, etc.</p><blockquote><p>Options in <code>options</code> and <code>visible-options</code> must be the same <strong>raw</strong> object.</p></blockquote></li></ul><h3 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-label="Permalink to &quot;disabled&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p><p>Whether to disable the select.</p></li></ul><h3 id="loading" tabindex="-1">loading <a class="header-anchor" href="#loading" aria-label="Permalink to &quot;loading&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p><p>Whether to show the loading spinner.</p></li></ul><h3 id="label-by" tabindex="-1">label-by <a class="header-anchor" href="#label-by" aria-label="Permalink to &quot;label-by&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string | (option =&gt; string)</code></p></li><li><p><strong>Details</strong>:</p><p>This will be used in dropdown and tags.</p><p>It accepts path, or function to locate the label.</p><p>For example, if you have options like this: <code>[{ details: { name: &#39;bar&#39; } }]</code></p><p>You could pass <code>details.name</code> or <code>option =&gt; option.detail.name</code> to set label to <code>&#39;bar&#39;</code>.</p></li></ul><h3 id="value-by" tabindex="-1">value-by <a class="header-anchor" href="#value-by" aria-label="Permalink to &quot;value-by&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string | (option =&gt; string)</code></p></li><li><p><strong>Details</strong>:</p><p>Same as <code>label-by</code> but for <code>value</code></p></li></ul><h3 id="disabled-by" tabindex="-1">disabled-by <a class="header-anchor" href="#disabled-by" aria-label="Permalink to &quot;disabled-by&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string | (option =&gt; boolean)</code></p></li><li><p><strong>Default</strong>: <code>&#39;disabled&#39;</code></p></li><li><p><strong>Details</strong>:</p><p>Same as <code>label-by</code> but for <code>disabled</code></p></li></ul><h3 id="group-by" tabindex="-1">group-by <a class="header-anchor" href="#group-by" aria-label="Permalink to &quot;group-by&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string | (option =&gt; boolean)</code></p></li><li><p><strong>Default</strong>: <code>&#39;group&#39;</code></p></li><li><p><strong>Details</strong>:</p><p>Same as <code>label-by</code> but for <code>group</code></p><p>If one option is group, its <code>value</code> must be type <code>OptionType[]</code>.</p><p>When a group option is selected, those <code>value</code>s will be selected, and if all of those <code>value</code>s are already selected, it will be deselected.</p></li></ul><h3 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;placeholder&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string</code></p></li><li><p><strong>Default</strong>: <code>&#39;Select option&#39;</code></p></li></ul><h3 id="searchable" tabindex="-1">searchable <a class="header-anchor" href="#searchable" aria-label="Permalink to &quot;searchable&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>When <code>true</code>, <code>options</code> (or <code>visible-options</code> if passed) will be filtered by the search text.</p></li></ul><h3 id="search-placeholder" tabindex="-1">search-placeholder <a class="header-anchor" href="#search-placeholder" aria-label="Permalink to &quot;search-placeholder&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>string</code></p></li><li><p><strong>Default</strong>: <code>&#39;Type to search&#39;</code></p></li></ul><h3 id="clear-on-close" tabindex="-1">clear-on-close <a class="header-anchor" href="#clear-on-close" aria-label="Permalink to &quot;clear-on-close&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>Whether to clear search text after collapsing dropdown.</p></li></ul><h3 id="clear-on-select" tabindex="-1">clear-on-select <a class="header-anchor" href="#clear-on-select" aria-label="Permalink to &quot;clear-on-select&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>Whether to clear search text after selected/removed.</p></li></ul><h3 id="multiple" tabindex="-1">multiple <a class="header-anchor" href="#multiple" aria-label="Permalink to &quot;multiple&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li></ul><h3 id="min" tabindex="-1">min <a class="header-anchor" href="#min" aria-label="Permalink to &quot;min&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>number</code></p></li><li><p><strong>Default</strong>: <code>0</code></p></li><li><p><strong>Details</strong>:</p><p>If <code>multiple</code> is <code>false</code>, <code>0</code> means clearable, <code>1</code> means non-clearable.</p></li></ul><h3 id="max" tabindex="-1">max <a class="header-anchor" href="#max" aria-label="Permalink to &quot;max&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>Infinity</code></p></li><li><p><strong>Details</strong>:</p><p>Only works if <code>multiple</code> is <code>true</code>.</p></li></ul><h3 id="taggable" tabindex="-1">taggable <a class="header-anchor" href="#taggable" aria-label="Permalink to &quot;taggable&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>Only works if <code>multiple</code> is <code>true</code>.</p></li></ul><h3 id="collapse-tags" tabindex="-1">collapse-tags <a class="header-anchor" href="#collapse-tags" aria-label="Permalink to &quot;collapse-tags&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p><p>Only works if <code>taggable</code> is <code>true</code>.</p></li></ul><h3 id="hide-selected" tabindex="-1">hide-selected <a class="header-anchor" href="#hide-selected" aria-label="Permalink to &quot;hide-selected&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>Only works if <code>multiple</code> is <code>true</code>.</p><p>Whether to Hide already selected options in the dropdown.</p></li></ul><h3 id="close-on-select" tabindex="-1">close-on-select <a class="header-anchor" href="#close-on-select" aria-label="Permalink to &quot;close-on-select&quot;">​</a></h3><ul><li><p><strong>Type</strong>: <code>boolean</code></p></li><li><p><strong>Default</strong>: <code>false</code></p></li><li><p><strong>Details</strong>:</p><p>Whether to collapse dropdown after selected/removed.</p></li></ul><h3 id="maxheight" tabindex="-1">maxHeight <a class="header-anchor" href="#maxheight" aria-label="Permalink to &quot;maxHeight&quot;">​</a></h3><p>New in <code>v2.5.0+</code></p><ul><li><p><strong>Type</strong>: <code>number</code></p></li><li><p><strong>Default</strong>: <code>300</code></p></li><li><p><strong>Details</strong>:</p><p>Max height of dropdown.</p></li></ul><h3 id="opendirection" tabindex="-1">openDirection <a class="header-anchor" href="#opendirection" aria-label="Permalink to &quot;openDirection&quot;">​</a></h3><p>New in <code>v2.5.0+</code></p><ul><li><p><strong>Type</strong>: <code>&#39;top&#39; | &#39;bottom&#39;</code></p></li><li><p><strong>Details</strong>:</p><p>Fixed opening direction.</p><p>If it is not set, it will be automatically calculated based on <code>maxHeight</code>.</p></li></ul><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="update-modelvalue" tabindex="-1">update:modelValue <a class="header-anchor" href="#update-modelvalue" aria-label="Permalink to &quot;update:modelValue&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{(OptionType | EmptyModelValueType) | (OptionType | EmptyModelValueType)[]}</code> modelValue</li></ul></li></ul><h3 id="selected" tabindex="-1">selected <a class="header-anchor" href="#selected" aria-label="Permalink to &quot;selected&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{OptionType}</code> option</li></ul></li></ul><h3 id="removed" tabindex="-1">removed <a class="header-anchor" href="#removed" aria-label="Permalink to &quot;removed&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{OptionType}</code> option</li></ul></li></ul><h3 id="opened" tabindex="-1"><s>opened</s> <a class="header-anchor" href="#opened" aria-label="Permalink to &quot;~~opened~~&quot;">​</a></h3><blockquote><p>Warning: deprecated, use <a href="#focus"><code>focus</code></a> instead.</p></blockquote><h3 id="closed" tabindex="-1"><s>closed</s> <a class="header-anchor" href="#closed" aria-label="Permalink to &quot;~~closed~~&quot;">​</a></h3><blockquote><p>Warning: deprecated, use <a href="#blur"><code>blur</code></a> instead.</p></blockquote><h3 id="focus" tabindex="-1">focus <a class="header-anchor" href="#focus" aria-label="Permalink to &quot;focus&quot;">​</a></h3><p>New in <code>v2.4.0+</code></p><h3 id="blur" tabindex="-1">blur <a class="header-anchor" href="#blur" aria-label="Permalink to &quot;blur&quot;">​</a></h3><p>New in <code>v2.4.0+</code></p><h3 id="toggle" tabindex="-1">toggle <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;toggle&quot;">​</a></h3><p>New in <code>2.6.0+</code></p><h3 id="search-input" tabindex="-1">search:input <a class="header-anchor" href="#search-input" aria-label="Permalink to &quot;search:input&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{Event}</code> event</li></ul></li></ul><h3 id="search-change" tabindex="-1">search:change <a class="header-anchor" href="#search-change" aria-label="Permalink to &quot;search:change&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{Event}</code> event</li></ul></li></ul><h3 id="search-focus" tabindex="-1">search:focus <a class="header-anchor" href="#search-focus" aria-label="Permalink to &quot;search:focus&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{Event}</code> event</li></ul></li></ul><h3 id="search-blur" tabindex="-1">search:blur <a class="header-anchor" href="#search-blur" aria-label="Permalink to &quot;search:blur&quot;">​</a></h3><ul><li><p><strong>Arguments</strong>:</p><ul><li><code>{Event}</code> event</li></ul></li></ul><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="dropdown-item" tabindex="-1">dropdown-item <a class="header-anchor" href="#dropdown-item" aria-label="Permalink to &quot;dropdown-item&quot;">​</a></h3><ul><li><p><strong>Attributes</strong>:</p><ul><li><code>{OptionType}</code> option</li></ul></li></ul><h3 id="label" tabindex="-1">label <a class="header-anchor" href="#label" aria-label="Permalink to &quot;label&quot;">​</a></h3><p>New in <code>v2.9.0+</code></p><ul><li><p><strong>Attributes</strong>:</p><ul><li><code>{(OptionType | EmptyModelValueType) | (OptionType | EmptyModelValueType)[]}</code> selected</li></ul></li></ul><h3 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;tag&quot;">​</a></h3><ul><li><p><strong>Attributes</strong>:</p><ul><li><p><code>{OptionType}</code> option</p></li><li><p><code>{Function}</code> remove</p><p>New in <code>v2.7.0+</code></p></li></ul></li></ul><h3 id="toggle-1" tabindex="-1">toggle <a class="header-anchor" href="#toggle-1" aria-label="Permalink to &quot;toggle&quot;">​</a></h3><ul><li><p><strong>Attributes</strong>:</p><ul><li><code>{boolean}</code> isFocusing</li><li><code>{Function}</code> toggle</li></ul><p>When using this slot, you often need to bind the <code>toggle</code> function to click event or else to enable open/close functionality.</p><p>In addition, you may also have to prevent <strong>mousedown</strong> event by adding <code>@mousedown.prevent</code> to prevent default behavior (fire focus event). See more details <a href="https://github.com/iendeavor/vue-next-select/issues/239" target="_blank" rel="noreferrer">here</a>.</p></li></ul><h3 id="loading-1" tabindex="-1">loading <a class="header-anchor" href="#loading-1" aria-label="Permalink to &quot;loading&quot;">​</a></h3>',88),r=[i];function n(s,d,c,p,u,h){return l(),o("div",null,r)}const m=e(t,[["render",n]]);export{b as __pageData,m as default};


export default function Toolbar() {
    return (
        <div id="toolbar" class="toolbar">
            <button id="sidebar-button" class="toolbar-button" title="Model Properties">
                <svg class="toolbar-icon" viewbox="0 0 100 100">
                    <rect class="border" x="12" y="12" width="76" height="76" rx="16" ry="16" stroke-width="8"></rect>
                    <line class="border" x1="28" y1="37" x2="32" y2="37" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="28" y1="50" x2="32" y2="50" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="28" y1="63" x2="32" y2="63" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="40" y1="37" x2="70" y2="37" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="40" y1="50" x2="70" y2="50" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="40" y1="63" x2="70" y2="63" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <rect class="stroke" x="12" y="12" width="76" height="76" rx="16" ry="16" stroke-width="4"></rect>
                    <line class="stroke" x1="28" y1="37" x2="32" y2="37" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="28" y1="50" x2="32" y2="50" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="28" y1="63" x2="32" y2="63" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="40" y1="37" x2="70" y2="37" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="40" y1="50" x2="70" y2="50" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="40" y1="63" x2="70" y2="63" stroke-width="4" stroke-linecap="round"></line>
                </svg>
            </button>
            <button id="zoom-in-button" class="toolbar-button" title="Zoom In">
                <svg class="toolbar-icon" viewbox="0 0 100 100">
                    <circle class="border" cx="50" cy="50" r="35" stroke-width="8" stroke="#fff"></circle>
                    <line class="border" x1="50" y1="38" x2="50" y2="62" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="38" y1="50" x2="62" y2="50" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="78" y1="78" x2="82" y2="82" stroke-width="12" stroke-linecap="square" stroke="#fff"></line>
                    <circle class="stroke" cx="50" cy="50" r="35" stroke-width="4"></circle>
                    <line class="stroke" x1="50" y1="38" x2="50" y2="62" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="38" y1="50" x2="62" y2="50" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="78" y1="78" x2="82" y2="82" stroke-width="8" stroke-linecap="square"></line>
                </svg>
            </button>
            <button id="zoom-out-button" class="toolbar-button" title="Zoom Out">
                <svg class="toolbar-icon" viewbox="0 0 100 100">
                    <circle class="border" cx="50" cy="50" r="35" stroke-width="8" stroke="#fff"></circle>
                    <line class="border" x1="38" y1="50" x2="62" y2="50" stroke-width="8" stroke-linecap="round" stroke="#fff"></line>
                    <line class="border" x1="78" y1="78" x2="82" y2="82" stroke-width="12" stroke-linecap="square" stroke="#fff"></line>
                    <circle class="stroke" cx="50" cy="50" r="35" stroke-width="4"></circle>
                    <line class="stroke" x1="38" y1="50" x2="62" y2="50" stroke-width="4" stroke-linecap="round"></line>
                    <line class="stroke" x1="78" y1="78" x2="82" y2="82" stroke-width="8" stroke-linecap="square"></line>
                </svg>
            </button>
            <div id="toolbar-path" class="toolbar-path">
                <button id="toolbar-path-back-button" class="toolbar-path-back-button" title="Back">
                    &#x276E;
                </button>
            </div>
        </div>
    )
}


export default function Titlebar() {
    return (
        <div id="titlebar" class="titlebar">
            <svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;" aria-hidden="true">
                <symbol id="icon-arrow-right" viewBox="0 0 1024 1024">
                    <path d="M698.75712 565.02272l-191.488 225.4848a81.73568 81.73568 0 0 1-62.48448 28.89728 81.89952 81.89952 0 0 1-62.40256-134.94272l146.432-172.4416-146.432-172.4416a81.92 81.92 0 0 1 124.88704-106.06592l191.488 225.4848a81.87904 81.87904 0 0 1 0 106.02496z"></path>
                </symbol>
            </svg>
            <div id="titlebar-content" class="titlebar-content">
                <span id="titlebar-content-text" class="titlebar-content-text"></span>
            </div>
            <div id="titlebar-control-box" class="titlebar-control-box">
                <div id="titlebar-close" class="titlebar-button titlebar-button-close" title="Close">
                    <svg class="titlebar-icon" aria-hidden="true">
                        <path d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"></path>
                    </svg>
                </div>
                <div id="titlebar-toggle" class="titlebar-button" title="Maximize">
                    <svg id="titlebar-maximize" class="titlebar-icon" aria-hidden="true" style="position: absolute;">
                        <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"></path>
                    </svg>
                    <svg id="titlebar-restore" class="titlebar-icon" aria-hidden="true" style="position: absolute;">
                        <path d="m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z"></path>
                    </svg>
                </div>
                <div id="titlebar-minimize" class="titlebar-button" title="Minimize">
                    <svg class="titlebar-icon" aria-hidden="true">
                        <path d="M 0,5 10,5 10,6 0,6 Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
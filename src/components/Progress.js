import React from 'react'

function Progress() {
    return (
        <div>
            <h5>Rokotettujen osuus 12 vuotta täyttäneistä Suomessa:</h5>
            <div class="progress">
  <div class="progress-bar mt-2" role="progressbar" style={{width: 250}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar mt-2" role="progressbar" style={{width: 250}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
    )
}

export default Progress

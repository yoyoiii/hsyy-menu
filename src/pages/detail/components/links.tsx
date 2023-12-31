import {
  setClipboardData,
  getClipboardData,
  getEnv
} from '@tarojs/taro'

const ENV_TYPE = getEnv()?.toUpperCase();

export default function Links({ link }) {

  const handleClick = () => {
    setClipboardData({
      data: link,
      success: function () {
        getClipboardData({
          success: function (res) {
            // console.log(res.data)
          }
        })
      }
    })
  }

  return (
    <div id="Links" className="recipe-main-content">
      {
        link
          ?
          <div>
            <p className="links-detail">{link}</p>
            {
              ENV_TYPE == "WEAPP"
                ? <span className="copy-btn" onClick={handleClick}>点击复制链接到剪切板</span>
                : null
            }
          </div>
          : <div className="no-data">暂无数据</div>
      }
    </div>
  )
}

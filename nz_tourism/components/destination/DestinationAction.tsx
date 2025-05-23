'use client';

import { useState } from 'react';

interface DestinationActionProps {
  destinationId: string;
  destinationTitle: string;
}

const DestinationAction: React.FC<DestinationActionProps> = ({
  destinationId,
  destinationTitle
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    // 在实际应用中，这里应该调用API来保存收藏状态
    if (!isFavorite) {
      console.log(`Adding ${destinationTitle} to favorites`);
      // 添加到收藏的API调用
    } else {
      console.log(`Removing ${destinationTitle} from favorites`);
      // 从收藏中移除的API调用
    }
  };

  const handleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  const shareVia = (platform: string) => {
    // 在实际应用中，这里应该实现对应平台的分享功能
    console.log(`Sharing ${destinationTitle} via ${platform}`);
    setIsShareOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际应用中，这里应该发送表单数据到后端API
    console.log('提交表单', { name, phone, email, message, destinationId });
    setShowSuccess(true);
    
    // 3秒后隐藏成功消息
    setTimeout(() => {
      setShowSuccess(false);
      // 清空表单
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="destination-action">
      <div className="action-card">
        <div className="action-buttons">
          <button 
            className={`action-button favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteToggle}
            aria-label={isFavorite ? '取消收藏' : '添加到收藏'}
          >
            <svg 
              className="action-icon" 
              fill={isFavorite ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span className="action-text">{isFavorite ? '已收藏' : '收藏'}</span>
          </button>

          <div className="share-container">
            <button 
              className="action-button share-button"
              onClick={handleShare}
              aria-label="分享"
            >
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span className="action-text">分享</span>
            </button>
            
            {isShareOpen && (
              <div className="share-dropdown">
                <button 
                  className="share-option" 
                  onClick={() => shareVia('wechat')}
                >
                  <svg className="share-icon wechat" viewBox="0 0 24 24">
                    <path d="M8.4 4.2c-4.6 0-8.4 3.3-8.4 7.4 0 2.5 1.4 4.7 3.6 6.1-0.2 0.2-0.8 0.8-0.9 0.9-0.3 0.3-0.5 0.7-0.2 1.1 0.4 0.4 0.8 0.1 1.1-0.1l1.3-0.7c0.7 0.2 1.3 0.3 2 0.3 0.2 0 0.4 0 0.6 0 0 0.2 0 0.4 0 0.5 0 0.5 0 1.1 0.1 1.6-3.1-0.6-5.3-2.8-5.3-5.2 0-3 2.9-5.5 6.5-5.5 3.4 0 6.2 2.2 6.5 4.9-0.5-0.2-0.9-0.3-1.5-0.3-3.2 0-5.8 2.6-5.8 5.8 0 0.5 0.1 1.1 0.2 1.5 0 0.1 0 0.2 0.1 0.3-0.3 0-0.6 0-0.9 0-0.3 0-0.6 0-0.9-0.1l-0.8 0.4c-0.2 0.1-0.4 0.2-0.6 0.2-0.2 0-0.3-0.1-0.4-0.2 0-0.1 0-0.2 0.1-0.4 0.1-0.1 0.5-0.5 0.7-0.7-1.3-0.9-2.2-2.2-2.3-3.7h0c0-2.5 2.6-4.5 5.8-4.5 0.4 0 0.8 0 1.3 0.1 0.3-3.3-3.3-5.8-7.5-5.8zM6.5 9.1c0.7 0 1.3 0.6 1.3 1.3s-0.6 1.3-1.3 1.3-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3zM12 9.1c0.7 0 1.3 0.6 1.3 1.3s-0.6 1.3-1.3 1.3-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3zM17.1 12.8c0 0.7-0.6 1.3-1.3 1.3s-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3 1.3 0.6 1.3 1.3zM20.6 12.8c0 0.7-0.6 1.3-1.3 1.3s-1.3-0.6-1.3-1.3 0.6-1.3 1.3-1.3 1.3 0.6 1.3 1.3z" />
                  </svg>
                  <span>微信</span>
                </button>
                <button 
                  className="share-option" 
                  onClick={() => shareVia('weibo')}
                >
                  <svg className="share-icon weibo" viewBox="0 0 24 24">
                    <path d="M10.098 20c-4.038 0-7.098-1.966-7.098-5.116 0-2.349 1.568-5.012 4.294-7.124 3.726-2.78 7.199-3.891 7.989-1.966.445 1.031-.522 2.637-1.676 3.512-.393.226-.175.468.01.563.787.371 2.206-.142 3.49-.946 1.134-.707 1.147-1.326.814-1.734-.628-.763-2.533-.452-2.96-.363-.304.063-.37-.248-.261-.478.109-.229.866-1.017 2.054-1.022 1.989-.006 3.21 1.357 3.3 2.143.16 1.414-1.3 3.292-3.523 4.667-1.375.854-2.571 1.178-3.467 1.178-.597 0-1.035-.15-1.205-.316-.777-.574.065-1.945 1.208-1.958.562-.009 1.391.414 1.737.778 0 0 .292.488.003.621-.234.103-.434-.098-.613-.209-.18-.111-.674-.546-1.238-.536-1.595.075-1.153 1.492-.219 1.492.783 0 1.926-.586 3.325-1.851 2.608-2.357 1.334-5.008.631-5.594-1.267-1.056-7.473 2.752-7.497 8.155-.006 1.281.883 3.019 3.021 3.019 3.498 0 6.712-2.759 8.152-5.661.202-.404.516-.383.52.059-.123 2.827-5.152 7.67-9.391 7.67zm7.962-14.642c-.213-.422.11-.912.532-1.091.424-.18.933.02 1.146.442.221.423.795 2.045-.118 4.277-.214.418-.721.605-1.147.424-.423-.178-.695-.678-.483-1.097.57-1.255.402-2.351.07-2.955zm-2.952-.242c-.213-.39.09-.842.451-.999.364-.158.801.031.992.388.195.36.302.802.236 1.161-.074.396-.071.525-.241.658-.333.243-.798.016-.99-.343-.192-.36-.256-.798-.242-.861l-.206-.004z" />
                  </svg>
                  <span>微博</span>
                </button>
                <button 
                  className="share-option" 
                  onClick={() => shareVia('qzone')}
                >
                  <svg className="share-icon qzone" viewBox="0 0 24 24">
                    <path d="M23.992 12.051c-.028-.28-.078-.51-.113-.775-.041-.227-.066-.482-.134-.7-.098-.31-.648.11-.72-.022-1.068-2.921-4.207-5.521-10.51-5.521-5.981 0-9.319 3.241-10.51 5.521 0 0-.79.366-.854.654-.142.637-.133 1.358-.038 2.001.061.422.273.773.418 1.163.051.241.053.523.106.764.161.713.34 1.404.601 2.081.038.131.162.229.199.358.181.518.396 1.05.695 1.489.082.168.211.328.293.358.554.872 1.303 1.603 2.194 2.159.464.334.987.605 1.496.874.226.114.454.376.671.368 1.416.826 3.571 1.226 5.731 1.226 2.178 0 4.129-.346 5.731-1.226 0 0 .346-.107.671-.368.51-.27 1.033-.541 1.496-.874.891-.556 1.641-1.287 2.194-2.159.082-.03.211-.19.293-.358.299-.439.514-.971.695-1.489.037-.13.161-.227.199-.358.261-.676.441-1.369.601-2.081.053-.241.056-.523.106-.764.146-.389.357-.741.418-1.163.063-.419.032-.873.032-.87.001-.377-.026-.735-.071-1.086zm-6.826 7.758c-.464.35-.874.679-1.359.969-.238.147-1.021.366-1.021.366-.618.177-1.251.335-1.886.468-.762.137-1.542.221-2.32.26-.778-.039-1.558-.123-2.32-.26-.635-.133-1.268-.291-1.886-.468 0 0-.783-.219-1.021-.366-.485-.29-.895-.619-1.359-.969-.231-.175-.688-.468-.917-.697-.231-.23-.419-.493-.628-.741-.186-.285-.375-.571-.515-.889-.081-.142-.13-.278-.188-.402-.196-.304-.353-.63-.509-.964l-.069-.187c-.133-.337-.241-.674-.323-1.011-.016-.079-.061-.294-.073-.434-.047-.297-.181-.667-.181-.667-.087-.364-.031-.732-.035-1.096 0 0-.033-.359.036-.719l.134-.468s.048-.133.096-.198c.049-.064.09-.166.086-.118.25-.305.536-.6.851-.864.454-.382.945-.726 1.452-1.039.31-.189.645-.359.981-.513.334-.152.693-.279 1.052-.392.72-.237 1.397-.424 2.52-.639.246-.047.502-.074.76-.106.517-.064 1.229-.125 1.886-.154.659.029 1.371.091 1.886.154.258.032.513.059.76.106 1.123.215 1.8.402 2.52.639.358.113.718.24 1.052.392.336.154.671.324.981.513.507.313.998.657 1.452 1.039.315.265.601.56.851.864-.004-.048.037.053.086.118.048.65.096.198.096.198l.134.468c.069.36.037.719.037.719-.004.365.052.732-.035 1.096 0 0-.134.37-.181.667-.012.139-.057.355-.073.434-.082.337-.189.674-.323 1.011l-.069.187c-.157.334-.313.66-.509.964-.058.124-.107.26-.188.402-.14.318-.33.604-.515.889-.209.248-.397.511-.628.741-.23.23-.687.522-.918.697z"/>
                    <circle cx="12" cy="12" r="4.109"/>
                  </svg>
                  <span>QQ空间</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="inquiry-form">
          <h3 className="form-title">咨询预订</h3>
          <p className="form-subtitle">填写下方表单，我们将有专人与您联系</p>
          
          {showSuccess ? (
            <div className="success-message">
              <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p>提交成功！我们会尽快联系您</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">电话</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  required 
                  placeholder="请输入您的联系电话"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入您的邮箱（选填）"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">留言</label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="请输入您的具体需求（选填）"
                  rows={3}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                提交咨询
              </button>
            </form>
          )}
          
          <div className="contact-info">
            <p>或直接联系我们:</p>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>400-123-4567</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@nztourism.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationAction; 
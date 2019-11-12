class User < ApplicationRecord
  validates :name, :email_address, :username, :password_digest, :session_token, presence: true
  validates :username, :email_address, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}

  attr_reader :password

  after_initialize :ensure_session_token!

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user && user.correct_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    new_session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: new_session_token)
      new_session_token = SecureRandom.urlsafe_base64
    end
    self.session_token = new_session_token
    self.save
    self.session_token
  end

  private
  def ensure_session_token!
    self.session_token ||= reset_session_token!
  end
end

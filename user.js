const api = require('./api');

async function getUser() {
  try {
    const user = await api.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

function sendCode(phone) {
  return api.call('auth.sendCode', {
    phone_number: phone,
    settings: {
      _: 'codeSettings',
    },
  });
}

function signIn({ code, phone, phone_code_hash }) {
  return api.call('auth.signIn', {
    phone_code: code,
    phone_number: phone,
    phone_code_hash: phone_code_hash,
  });
}

(async () => {
  //const c = await sendCode('+37376739841')
  //console.log('user', c)
  const user = await signIn({
    code: '21587',
    phone: '+37376739841',
    phone_code_hash: 'a9acd5e52775f86e64'
  })
  console.log('user', user)
})()

// phone_code_hash: 'a9acd5e52775f86e64'
//Login code: 21587

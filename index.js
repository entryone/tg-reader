const api = require('./api');

(async () => {
  const resolvedPeer = await api.call('contacts.resolveUsername', {
    username: 'redakciya_channel',
  });

  const channel = resolvedPeer.chats.find(
    (chat) => chat.id === resolvedPeer.peer.channel_id
  );

  const inputPeer = {
    _: 'inputPeerChannel',
    channel_id: channel.id,
    access_hash: channel.access_hash,
  };

  const LIMIT_COUNT = 1;
  const allMessages = [];

  const firstHistoryResult = await api.call('messages.getHistory', {
    peer: inputPeer,
    limit: LIMIT_COUNT,
  });

  const historyCount = firstHistoryResult.count;
  console.log('historyCount', historyCount)

  //for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {
    const history = await api.call('messages.getHistory', {
      peer: inputPeer,
      add_offset: 1,
      limit: LIMIT_COUNT,
    });

    allMessages.push(...history.messages);
  //}

  console.log('allMessages:', allMessages);
})();

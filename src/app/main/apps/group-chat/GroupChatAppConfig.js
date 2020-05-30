import React from 'react';

export const GroupChatAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/group-chat',
            component: React.lazy(() => import('./GroupChatApp'))
        }
    ]
};

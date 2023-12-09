import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://cdn.builder.io/api/v1/graphql/9479a5a70ce74366993f0c04854fd2b7'

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) {
    //     return {
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})

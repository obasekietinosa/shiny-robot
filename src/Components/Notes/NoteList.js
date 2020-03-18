import React from 'react'
import NotePreview from './NotePreview'

export default function NoteList() {
    return (
        <div>
            <ol>
                {
                    this.state.posts.map((post, key) => {
                        return (
                            <li>
                                <NotePreview
                                    key={key}
                                    title={post.title.rendered}
                                    category={post['_embedded']['wp:term'][0][0].name}
                                    datePublished={post.date}
                                    excerpt={post.excerpt.rendered}
                                    link={"/posts/" + post.slug}
                                />
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

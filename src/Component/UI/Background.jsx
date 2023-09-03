import React from 'react'

function Background({ children }) {
    return (
        <div>
            <section>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center ">
                       
                            {
                                children
                            }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Background

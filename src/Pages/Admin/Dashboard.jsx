import React from 'react'
import Background from '../../Component/UI/Background'
import AdminButton from '../../Component/UI/AdminButton'
import TableData from '../../Component/UI/TableData'

function AdminDashboard() {
    return (
        <div>
            <Background>
                <div class="col-12">
                    <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>

                        <div class="card-body p-5 text-center">
                            <AdminButton />
                            <TableData/>
                        </div>
                    </div>
                </div>


            </Background>
        </div>
    )
}


export default AdminDashboard
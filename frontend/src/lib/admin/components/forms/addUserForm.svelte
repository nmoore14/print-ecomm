<script>
    import { isOpen } from '$lib/admin/store/modalStore.js';

    let employeeName;
    let username;
    let password;
    let confirmPassword;
    let email;

    // TODO: add a alert statement if the form has content

    $: if (! $isOpen) {
        employeeName = '';
        username = '';
        password = '';
        confirmPassword = '';
        email = '';
    }

    // TODO: Update the button to indicate loading of data being sent on button click.
    async function submitUser() {
        const res = await fetch('http://localhost:8080/users', {
            method: 'POST',
            body: JSON.stringify({
                name: employeeName,
                username,
                title: 'Accountant',
                permission: 2,
                password,
                email,
            })
        });

        const json = await res.json();
        result = JSON.stringify(json);
    };

</script>
<div class="flex flex-col nowrap justify-center items-start">
    <h1 class="text-base-content">Add New Employee</h1>
    <div class="flex flex-col nowrap w-full p-4 justify-between items-center bg-base-300 rounded-md">
        <div class="flex flex-row nowrap w-full justify-between items-center">
            <div class="form-control">
                <label class="label" for="employeeName">
                    <span class="label-text" name="employeeName">Employee Name</span>
                </label> 
                <input type="text" placeholder="Employee Name" class="input input-bordered text-base-content" bind:value={employeeName}>
            </div>
            <div class="form-control">
                <label class="label" for="username">
                    <span class="label-text" name="username">Username</span>
                </label> 
                <input type="text" placeholder="username" class="input input-bordered text-base-content" bind:value={username}>
            </div>
        </div>
        <div class="w-full form-control">
            <label class="label" for="email">
                <span class="label-text" name="email">Email</span>
            </label> 
            <input type="email" placeholder="Email" class="input input-bordered text-base-content" bind:value={email}>
        </div>
    </div>
    <div class="w-full input-group input-group-vertical">
        <div class="form-control">
            <label class="label" for="password">
                <span class="label-text" name="password">Password</span>
            </label> 
            <input type="password" placeholder="Password" class="w-full input input-bordered text-base-content" bind:value={password}>
        </div> 
        <div class="form-control">
            <label class="label" for="confirmPassword">
                <span class="label-text" name="confirmPassword">Confirm Password</span>
            </label> 
            <input type="password" placeholder="Confirm Password" class="input input-bordered text-base-content" bind:value={confirmPassword}>
        </div> 
    </div>
    <div class="flex flex-row nowrap w-full mt-12 p-4 justify-between items-center bg-base-300 rounded-md">
        <button class="btn btn-warning">Clear</button>
        <button class="btn btn-success" on:click={ submitUser }>Create</button>
    </div>
</div>

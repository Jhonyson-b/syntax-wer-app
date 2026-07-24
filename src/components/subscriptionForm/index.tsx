export const SubscriptionForm = () => {
    return (
        <form>
            <label className='flex flex-col' htmlFor='newsletter'>inscreva-se em nosso e-mail</label>
            <input type='email' id='newsletter' 
            name="newsletter" 
            placeholder="email@email.com" 
            className='rounded-[30px] bg-white py-3 px-5 min-w-[344px] placeholder-gray-[#aaaaaa]' />
        </form>
    )
}
import { Fragment, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";
import { BiSearch } from "react-icons/bi"



const navigation = [
    { name: 'About', href: '#' },
    { name: 'Discover', href: '#' },
    { name: 'Features', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Fragment>
            <header className="bg-green-800 text-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8" aria-label="Global">
                    <a href="#" className="-m-1.5 p-1.5">
                        <strong className='text-3xl '>House of Plant</strong>
                    </a>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                        {/* <Form> */}
                            {/* <Form.Item className="mb-0 px-2"> */}
                                <Input
                                    name="searchData"
                                    style={{ width: 200}}
                                    prefix={<BiSearch className="mr-2" color='white' />}
                                    className="text-sm outline-none rounded-full placeholder-gray-500 placeholder-opacity-0"
                                    placeholder="Search Plant..."
                                    allowClear
                                    bordered={false}
                                    // onKeyDown={handleOnKeyDown}
                                ></Input>
                            {/* </Form.Item> */}
                        {/* </Form> */}
                        <div>
                        <a href="#" className="text-sm font-semibold leading-6 text-white flex items-center gap-2">
                            <UserOutlined />
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                        </div>
                    </div>

                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <strong className='text-3xl '>House of Plant</strong>

                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </Fragment>
    )
}

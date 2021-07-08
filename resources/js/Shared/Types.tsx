import React from 'react'


export interface Employee {
    id?: number
    id_number?: string
    surname?: string
    other_name?: string
    gender?: Gender
    email?: string
    mobile_number?: string
    alternative_email?: string
    alternative_mobile_number?: string
    profile_photo?: string
    region?: Region
    location?: string
    position?: string
    address?: string
    resumption_date?: string
    due_date?: string
    account?: User
    date_of_birth?: string
    employment_status?: EmploymentStatus
    job_status?: JobStatus
    job_status_description?: EmployeeJobStatus
    update_at?: string
    created_at?: string
}
export type EmployeeJobStatus = {
    employee?: Employee
    job_status?: JobStatus
    from?: string
    to?: string
    update_at?: string
    created_at?: string
}
export enum Gender {
    Female = "FEMALE",
    Male = "MALE"
}

export enum JobStatus {
    OnLeave = "ONLEAVE",
    Terminated = "TERMINATED",
    Inactive = "INACTIVE",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}

export enum EmploymentStatus {
    ProbationPeriod = "PROBATIONPERIOD",
    PartTime = "PARTTIME",
    FullTime = "FULLTIME"
}
export type User = {
    id: number
    email: string
    username: string
    mobile_number: string
    is_active: boolean
    settings?: Settings
    profile_photo_url?: string
    account_roles?: Role []
    account_permissions?: Permission []
    companies?: Company []
    created_at: string
    updated_at: string
}

export type Settings = {
    has_verify_email: boolean
    has_enable_otp: boolean
    has_enable_two_factory_auth: boolean
}

export type Role = {
    id?: number
    name?: string
    permissions?: Permission []
}

export type Permission = {
    id?: number
    name?: string
}

export type Company = {
    id: number
    name?: string
    code_name?: string
    email?: string
    tax_number?: string
    phone?: string
    address?: string
    is_active?: boolean
    currency?: string
    locale?: string
    logo?: string
    settings?: CompanySettings
    users?: User
    created_at?: string
    updated_at?: string
}

export type CompanySettings = {
    key?: string
    value?: string
}

export type Country = {
    id?: number
    name?: string
    native?: string
    phone?: string
    continent?: string
    capital?: string
    currency?: string
    language?: Language []
    nationality?: string
    sale_zone?: SaleZone
    longitude?: number
    latitude?: number
    update_at?: string
    created_at?: string
}

export type Language = {
    name?: string
}

export type GeopoliticalZone = {
    id?: number
    name?: string
    code_name?: string
    country?: Country
    regions?: Region []
    sale_zone?: SaleZone
    longitude?: number
    latitude?: number
    update_at?: string
    created_at?: string
}

export type Region = {
    id?: number
    name?: string
    code_name?: string
    geopolitical_zone?: GeopoliticalZone
    districts?: District []
    longitude?: number
    latitude?: number
    update_at?: string
    created_at?: string
}

export type District = {
    id?: number
    name?: string
    code_name?: string
    region?: Region
    shops?: Shop []
    sale_zone?: SaleZone  []
    longitude?: number
    latitude?: number
    update_at?: string
    created_at?: string
}

export type Shop = {
    id?: number
    name?: string
    code_name?: string
    phone?: string
    address?: string
    location?: string
    email?: string
    district?: District
    longitude?: number
    latitude?: number
    update_at?: string
    created_at?: string
}

export type SaleZone = {
    id?: number
    name?: string
    code_name?: string
    regions?: Region
    shops?: Shop
    sale_zoneable?: SaleZoneable
    update_at?: string
    created_at?: string
}

export type SaleZoneable = Country | GeopoliticalZone | Region | District

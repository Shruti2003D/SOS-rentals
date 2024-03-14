package com.carrental.models;

public class DashboardDTO {
    private long users;
    private long companies;
    private long variants;
    private long cars;
    private long bookings;

    public long getUsers() {
        return users;
    }

    public void setUsers(long users) {
        this.users = users;
    }

    public long getCompanies() {
        return companies;
    }

    public void setCompanies(long companies) {
        this.companies = companies;
    }

    public long getVariants() {
        return variants;
    }

    public void setVariants(long variants) {
        this.variants = variants;
    }

    public long getCars() {
        return cars;
    }

    public void setCars(long cars) {
        this.cars = cars;
    }

    public long getBookings() {
        return bookings;
    }

    public void setBookings(long bookings) {
        this.bookings = bookings;
    }
}

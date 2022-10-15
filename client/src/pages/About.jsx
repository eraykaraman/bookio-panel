import React from "react";

const About = () => {
  return (
    <div>
      <b>
        <p>
          Bu proje temel CRUD (Create-Read-Update-Delete) operasyonları içeren
          basit bir uygulamadır. Uygulama önyüzde React kullanırken sunucu
          tarafında Express.js PostgreSQL kullanmaktadır.
        </p>

        <p>
          Uygulamalar arası iletişim API üzerinden sağlanmaktadır. Kullanıcı
          temel CRUD operasyonlarını gerçekleştirebilmektedir.
        </p>
      </b>
    </div>
  );
};

export default About;

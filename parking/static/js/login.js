app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user.username;
        // ✅ Send file path relative to "public" folder
        res.sendFile(path.join(__dirname, 'public/html/home.html'));
      } else {
        res.send('Invalid credentials. <a href="/html/login.html">Try again</a>');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }
  });
  